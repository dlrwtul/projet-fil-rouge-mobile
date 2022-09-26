import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Livraison } from 'src/app/shared/models/livraison';
import { TokenService } from 'src/app/connexion/shared/services/token.service';
import { IonModal, NavController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Commande } from '../shared/models/commande';
import { SafeUrl } from '@angular/platform-browser';
import { LivraisonStoreService } from '../mes-livraisons/shared/services/livraison.store.service';

@Component({
  selector: 'app-details-livraison',
  templateUrl: './details-livraison.page.html',
  styleUrls: ['./details-livraison.page.scss'],
})
export class DetailsLivraisonPage implements OnInit,OnDestroy {
  myAngularxQrCode : string
  livraison : Livraison
  color : string
  cmdEnCours : number = 0
  cmdValide : number = 0
  cmdAnnule : number = 0
  enCourLivraison = 'en cours de livraison'
  valide = 'valide'
  annule = 'annule'
  isOpenModal = false
  @ViewChild(IonModal) modal: IonModal;

  constructor(private tokenServ : TokenService,private livraisonStoreServ : LivraisonStoreService,private navCtrl : NavController,/* private barcodeScanner: BarcodeScanner */) { }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.tokenServ.getLivraison().then(livraison => {
      this.livraison = livraison
      if (this.livraison.etat == 'en cours') {
        this.color = 'warning'
      }else {
        this.color = 'success'
      }
      livraison.commandes.forEach(element => {
        if (element.etat == this.enCourLivraison) {
          this.cmdEnCours++
        }
        if (element.etat == this.valide) {
          this.cmdValide++
        }
        if (element.etat == this.annule) {
          this.cmdAnnule++
        }
      });
    })
  }

  back() {
    this.navCtrl.navigateBack('mes-livraisons');
  }

  createQRCode(value : Commande) {
    this.myAngularxQrCode = JSON.stringify([value.client.login,value.id]);
  }

  changeEtatCommande() {
    this.livraisonStoreServ.$livraison(this.livraison.id).subscribe(data => {
      this.livraison = data
      console.log(this.livraison);
      
    })
  }

}
