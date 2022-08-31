import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesLivraisonsPageRoutingModule } from './mes-livraisons-routing.module';

import { MesLivraisonsPage } from './mes-livraisons.page';
import { SharedModule } from '../shared/shared.module';
import { EtatPipe } from './shared/pipes/etat.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesLivraisonsPageRoutingModule,
    SharedModule
  ],
  declarations: [MesLivraisonsPage,EtatPipe]
})
export class MesLivraisonsPageModule {}
