import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/shared/models/commande';
import { CommandeStoreService } from '../mes-commandes/shared/services/commande-store.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.page.html',
  styleUrls: ['./details-commande.page.scss'],
})
export class DetailsCommandePage implements OnInit {

  commande : Commande
  constructor(private location : Location , private activatedRoute : ActivatedRoute,private commandeStroreServ: CommandeStoreService,private router : Router) { }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.queryParams['id'])
    this.commandeStroreServ.$oneCommandesClient(id).subscribe(data => {
      this.commande = data
    })
  }

  back() {
    this.router.navigate(['/mes-commandes'])
    //this.location.back();
    console.log('baxna');
  }

  annuler( ) {
    this.commandeStroreServ.$changerEtatCommande(this.commande.id,'annule')
    this.back()
  }

}
