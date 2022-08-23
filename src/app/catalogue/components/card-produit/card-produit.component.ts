import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss'],
})
export class CardProduitComponent implements OnInit {

  @Input() produit : Produit
  quantiteVal = 1;
  constructor() { }

  ngOnInit() {}



}
