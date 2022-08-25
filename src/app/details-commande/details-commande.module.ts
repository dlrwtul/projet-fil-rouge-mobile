import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCommandePageRoutingModule } from './details-commande-routing.module';

import { DetailsCommandePage } from './details-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCommandePageRoutingModule
  ],
  declarations: [DetailsCommandePage]
})
export class DetailsCommandePageModule {}
