import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LivraisonStoreService } from './shared/services/livraison.store.service';
import { Livraison } from 'src/app/shared/models/livraison';
import { TokenService } from '../connexion/shared/services/token.service';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-mes-livraisons',
  templateUrl: './mes-livraisons.page.html',
  styleUrls: ['./mes-livraisons.page.scss'],
})
export class MesLivraisonsPage implements OnInit {
  livraisons$ : Observable<Livraison[]>
  etat = 'en cours'
  isIos : boolean
  constructor(private  livraisonStoreServ : LivraisonStoreService,private tokenServ : TokenService,private platform : Platform,private navController : NavController ) { }

  ngOnInit() {
    this.tokenServ.getUser().then(user => {
      this.livraisons$ = this.livraisonStoreServ.$commandesClient(user.login)
    })
  }

  showDetails(livraison : Livraison) {
    this.tokenServ.setLivraison(livraison)
    this.navController.navigateForward(['details-livraison']);
  }

}
