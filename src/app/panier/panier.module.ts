import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';

import { PanierPage } from './panier.page';
import { SharedModule } from '../shared/shared.module';
import { LigneProduitComponent } from './components/ligne-produit/ligne-produit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    SharedModule
  ],
  declarations: [PanierPage,LigneProduitComponent]
})
export class PanierPageModule {}
