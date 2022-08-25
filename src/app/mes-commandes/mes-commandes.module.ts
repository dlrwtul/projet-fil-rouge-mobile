import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesCommandesPageRoutingModule } from './mes-commandes-routing.module';

import { MesCommandesPage } from './mes-commandes.page';
import { SharedModule } from '../shared/shared.module';
import { FitlterDatePipe } from './shared/pipes/fitlter-date.pipe';
import { FitlterEtatPipe } from './shared/pipes/fitlter-num.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesCommandesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    MesCommandesPage,
    FitlterDatePipe,
    FitlterEtatPipe,
  ]
})
export class MesCommandesPageModule {}
