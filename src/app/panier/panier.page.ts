import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Commande } from '../shared/models/commande';
import { Quartier } from '../shared/models/quartier';
import { PanierService } from '../shared/services/panier-service.service';
import { QuartierStoreService } from '../shared/services/quartier-store.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  commande$ : Observable<Commande>
  isModalOpen = false;
  myForm : FormGroup = new FormGroup({})
  quartiers$ : Observable<Quartier[]>
  constructor(private panierServ : PanierService,private builder:FormBuilder,private quartierStroreServ :QuartierStoreService ) { }

  ngOnInit() {
    this.commande$ = this.panierServ.getCommande()
    this.quartiers$ = this.quartierStroreServ.quartiers$()
    this.myForm = this.builder.group({
      adresse : ['',Validators.required],
      telephone : ['',Validators.required],
      quartier : ['',Validators.required],
    })
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  stringify(quartier : Quartier):string {
    return JSON.stringify([quartier.zone.id,quartier.id])
  }

  commander(){

  }

}
