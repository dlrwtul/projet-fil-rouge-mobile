import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsProduitComplement } from '../catalogue/shared/models/details-produit-complement';
import { DetailProduitStoreService } from './shared/services/detail-produit-store.service';


@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit {

  constructor(private location: Location,private activatedRoute : ActivatedRoute,private detailsProduitStoreServ : DetailProduitStoreService) { }
  detailsProduit : Observable<DetailsProduitComplement>

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id'])    
    this.detailsProduit = this.detailsProduitStoreServ.getWithComplements$(id)
  }

  back() {
    this.location.back();
  }

}
