import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesLivraisonsPage } from './mes-livraisons.page';

const routes: Routes = [
  {
    path: '',
    component: MesLivraisonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesLivraisonsPageRoutingModule {}
