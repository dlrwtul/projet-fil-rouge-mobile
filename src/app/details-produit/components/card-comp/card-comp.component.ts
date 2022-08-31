import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BoissonTaille } from 'src/app/catalogue/shared/models/boisson-taille';
import { Produit } from 'src/app/catalogue/shared/models/produit';
import { CommandeBoissonTaille } from 'src/app/shared/models/commande-boisson-taille';
import { CommandeProduit } from 'src/app/shared/models/commande-produit';
import { PanierService } from 'src/app/shared/services/panier-service.service';

@Component({
  selector: 'app-card-comp',
  templateUrl: './card-comp.component.html',
  styleUrls: ['./card-comp.component.scss'],
})
export class CardCompComponent implements OnInit {
  quantiteVal = 1
  isFrite : boolean
  @Input() frite : Produit
  @Input() boissonTaille : BoissonTaille
  commandePortionFrites : CommandeProduit = {
    quantite : 0,
    produit : undefined,
    type:"CommandeProduit"
  };
  commandeBoissonTaille : CommandeBoissonTaille = {
    quantite : 0,
    boissonTaille : undefined,
    type:"CommandeBoissonTaille"
  };
  
  constructor(private toastController: ToastController,private panierServ: PanierService) { }

  ngOnInit() {
    if (this.frite != undefined) {
      this.isFrite = true
      this.commandePortionFrites.portionFrites = this.frite
      this.commandePortionFrites.prix = this.frite.prix
      this.commandePortionFrites.produit = this.frite
    }else {
      this.isFrite = false
      this.commandeBoissonTaille.boissonTaille = this.boissonTaille
      this.commandeBoissonTaille.prix = this.boissonTaille.taille.prix
    }
  }

  async presentToast(produit : string) {
    const toast = await this.toastController.create({
      message: `Nouveau ${produit} ajouté`,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  addPortion() {
    this.commandePortionFrites.quantite = this.quantiteVal    
    this.panierServ.addCommandePortonFrite(this.commandePortionFrites)
    this.presentToast("Frites")
  }

  addBoissonTaille(){
    this.commandeBoissonTaille.quantite = this.quantiteVal    
    this.panierServ.addCommandeBoissonTaille(this.commandeBoissonTaille)
    this.presentToast("Boisson")
  }

  getVal(value : number) {
    this.quantiteVal = value
  }
}
