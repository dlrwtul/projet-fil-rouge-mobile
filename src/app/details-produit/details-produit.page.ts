import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsProduitComplement } from '../catalogue/shared/models/details-produit-complement';
import { DetailProduitStoreService } from './shared/services/detail-produit-store.service';
import { CommandeProduit } from '../shared/models/commande-produit';
import { Commande } from 'src/app/shared/models/commande';
import { CommandeBoissonTaille } from '../shared/models/commande-boisson-taille';
import { Produit } from '../catalogue/shared/models/produit';
import { BoissonTaille } from '../catalogue/shared/models/boisson-taille';
import { PanierService } from '../shared/services/panier-service.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit {
  quantiteVal : number = 1
  produit : Produit
  commandeProduit : CommandeProduit = {
    quantite : 0,
    produit : undefined,
    type:"CommandeProduit"
  };
  constructor(private toastController: ToastController,private location: Location,private activatedRoute : ActivatedRoute,private detailsProduitStoreServ : DetailProduitStoreService,private panierServ : PanierService) { }
  detailsProduit : Observable<DetailsProduitComplement>
  
  async presentToast(produit : string) {
    const toast = await this.toastController.create({
      message: `Nouveau ${produit} ajouté`,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id'])    
    this.detailsProduit = this.detailsProduitStoreServ.getWithComplements$(id)
    this.detailsProduit.subscribe(data => {
      this.produit = data.produit
      this.commandeProduit.produit = data.produit
      this.commandeProduit.prix = data.produit.prix
    })
  }

  back() {
    this.location.back();
  }

  addProduct(){
    this.commandeProduit.quantite = this.quantiteVal
    console.log(this.commandeProduit);
    if (this.produit.type == "Burger") {
      this.panierServ.addCommandeBurger(this.commandeProduit)
    }
    if (this.produit.type == "Menu") {
      this.panierServ.addCommandeMenu(this.commandeProduit)
    }
    this.presentToast(this.produit.type)
  }

  getVal(value : number) {
    this.quantiteVal = value
  }

}
