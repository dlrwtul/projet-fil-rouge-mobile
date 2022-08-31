import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/catalogue/shared/models/produit';
import { Taille } from 'src/app/catalogue/shared/models/taille';
import { CommandeProduit } from 'src/app/shared/models/commande-produit';
import { CommandeBoissonTaille } from '../../../shared/models/commande-boisson-taille';

@Component({
  selector: 'app-ligne-produit',
  templateUrl: './ligne-produit.component.html',
  styleUrls: ['./ligne-produit.component.scss'],
})
export class LigneProduitComponent implements OnInit {
  @Input() commandeElement : CommandeProduit|CommandeBoissonTaille
  produit : Produit = {
    nom : '',
    prix : 0,
    type : ''
  }
  quantite : number
  prix : number
  taille : Taille
  constructor() { }

  ngOnInit() {
    if (this.commandeElement.type == 'CommandeProduit') {
      this.produit = this.commandeElement.produit
    }
    if (this.commandeElement.type == 'CommandeBoissonTaille') {
      this.produit = this.commandeElement.boissonTaille.boisson
    }
    console.log(this.produit);
  }

  getVal(value : number) {
    this.commandeElement.quantite = value
  }

}
