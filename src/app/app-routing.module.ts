import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './connexion/shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path : '',
    redirectTo : 'catalogue',
    pathMatch : 'full'
  },
  {
    path: 'details-produit/:id',
    loadChildren: () => import('./details-produit/details-produit.module').then( m => m.DetailsProduitPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'mes-commandes',
    loadChildren: () => import('./mes-commandes/mes-commandes.module').then( m => m.MesCommandesPageModule)
    ,
    canActivate : [AuthGuard],
    data: {
      role: "ROLE_CLIENT"
    }
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'details-commande',
    loadChildren: () => import('./details-commande/details-commande.module').then( m => m.DetailsCommandePageModule)
    ,
    canActivate : [AuthGuard],
    data: {
      role: "ROLE_CLIENT"
    }
  },
  {
    path: 'mes-livraisons',
    loadChildren: () => import('./mes-livraisons/mes-livraisons.module').then( m => m.MesLivraisonsPageModule)
    ,
    canActivate : [AuthGuard],
    data: {
      role: "ROLE_LIVREUR"
    }
  },
  {
    path: 'details-livraison',
    loadChildren: () => import('./details-livraison/details-livraison.module').then( m => m.DetailsLivraisonPageModule)
    ,
    canActivate : [AuthGuard],
    data: {
      role: "ROLE_LIVREUR"
    }
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
