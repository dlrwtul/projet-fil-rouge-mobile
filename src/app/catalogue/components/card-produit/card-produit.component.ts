import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss'],
})
export class CardProduitComponent implements OnInit {

  @Input() produit : Produit
  quantiteVal = 1;
  constructor(private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Nouveau produit ajouté',
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  ngOnInit() {}



}
