import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Commande } from '../models/commande';
import { PanierService } from '../services/panier-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  commande$ : Observable<Commande>
  @Input() text : string
  constructor(private panierServ : PanierService,private navCtrl : NavController) { }

  ngOnInit() {
    this.commande$ = this.panierServ.getCommande()
  }

  goTo() {
    this.navCtrl.navigateRoot('/panier')
  }

}
