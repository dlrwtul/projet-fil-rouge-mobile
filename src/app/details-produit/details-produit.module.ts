import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProduitPageRoutingModule } from './details-produit-routing.module';

import { DetailsProduitPage } from './details-produit.page';
import { SharedModule } from '../shared/shared.module';
import { CardCompComponent } from './components/card-comp/card-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProduitPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [DetailsProduitPage,CardCompComponent]
})
export class DetailsProduitPageModule {}
