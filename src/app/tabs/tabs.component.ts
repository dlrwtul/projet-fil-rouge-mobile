import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/connexion/shared/services/auth.service';
import { TokenService } from 'src/app/connexion/shared/services/token.service';
import { Commande } from '../shared/models/commande';
import { PanierService } from '../shared/services/panier-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit,OnChanges {

  isConnected : boolean ;
  isClient : boolean;
  isLivreur : boolean ;
  commande$ : Observable<Commande>
  count : number = 0
  isScan : boolean = false
  @ViewChild('myTab', { read: ElementRef }) myTab: ElementRef;

  constructor(private router : Router,private authServ : AuthService,private tokenServ : TokenService,private panierServ : PanierService) { 
    this.commande$ = this.panierServ.getCommande()
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = (<NavigationEnd>event).url;
        if (url == "/scan-qr") {
          this.isScan = true
        }else {
          this.isScan = false
        }

      }      
      
      this.tokenServ.getToken().then (value => {
        if (value != null) {
          this.isConnected = true
        }else {
          this.isConnected = false
        }
      })

      this.authServ.isClient().then (value => {
        if (value) {
          this.isClient = true
        }else {
          this.isClient = false
        }
      })

      this.authServ.isLivreur().then (value => {
        if (value) {
          this.isLivreur = true
        }else {
          this.isLivreur = false
        }
      })
  });
  }

}
