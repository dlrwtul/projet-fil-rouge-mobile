import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
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
  date : string = ''
  commandes$ : Observable<Commande[]>

  constructor(private commadeStroeServ : CommandeStoreService) { }

  ngOnInit() {
    this.commandes$ = this.commadeStroeServ.$commandesClient()
    this.commandes$.subscribe()
    this.date = (new Date).toLocaleDateString()
  }

  segmentChanged(event : Event) {

  }

  getDateFilter(value : string | string[] ) {    
    if (typeof value == 'string') {
      this.date = value
    }
  }

  annuler(item : HTMLDivElement,id : number) {
    this.commadeStroeServ.$changerEtatCommande(id,'annule').subscribe(data => console.log(data))
    item.parentElement.removeChild(item)
  }

}
