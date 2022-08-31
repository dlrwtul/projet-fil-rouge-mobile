import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsLivraisonPage } from './details-livraison.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsLivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsLivraisonPageRoutingModule {}
