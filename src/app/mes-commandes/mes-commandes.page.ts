import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../shared/models/commande';
import { CommandeStoreService } from './shared/services/commande-store.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.page.html',
  styleUrls: ['./mes-commandes.page.scss'],
})
export class MesCommandesPage implements OnInit {
  etat : string = 'en cours'
  commandes$ : Observable<Commande[]>

  constructor(private commadeStroeServ : CommandeStoreService) { }

  ngOnInit() {
    this.commandes$ = this.commadeStroeServ.$commandesClient(this.etat)
  }

  segmentChanged(event : Event) {

  }

}
