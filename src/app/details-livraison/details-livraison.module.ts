import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { DetailsLivraisonPageRoutingModule } from './details-livraison-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { DetailsLivraisonPage } from './details-livraison.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsLivraisonPageRoutingModule,
    SharedModule,
    IonicHeaderParallaxModule,
    QRCodeModule
  ],
  declarations: [DetailsLivraisonPage]
})
export class DetailsLivraisonPageModule {}
