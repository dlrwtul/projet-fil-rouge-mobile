import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { ToastController } from '@ionic/angular';
import { PanierService } from 'src/app/shared/services/panier-service.service';
import { CommandeProduit } from 'src/app/shared/models/commande-produit';
@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss'],
})
export class CardProduitComponent implements OnInit {

  @Input() produit : Produit
  commandeProduit : CommandeProduit = {
    quantite : 0,
    produit : undefined,
    type:"CommandeProduit"
  };

  quantiteVal = 1;
  constructor(private toastController: ToastController,private panierServ : PanierService) { }

  async presentToast(produit : string) {
    const toast = await this.toastController.create({
      message: `Nouveau ${produit} ajouté`,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  ngOnInit() {
    if (this.produit.type == "Burger") {
      this.commandeProduit.burger = this.produit
    }
    if (this.produit.type == "Menu") {
      this.commandeProduit.menu = this.produit
    }
    this.commandeProduit.produit = this.produit
    this.commandeProduit.prix = this.produit.prix
  }

  addProduct(){
    this.commandeProduit.quantite = this.quantiteVal
    
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
