import { Location } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './connexion/shared/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from './connexion/shared/services/token.service';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Animation, AnimationController,NavController } from '@ionic/angular';
import { PanierService } from './shared/services/panier-service.service';
import { Commande } from './shared/models/commande';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
  isConnected : boolean ;
  isClient : boolean;
  isLivreur : boolean ;
  commande$ : Observable<Commande>
  count : number = 0
  isScan : boolean = false
  constructor(private authServ : AuthService,private location : Location,private storage : Storage,private tokenServ : TokenService,private router : Router,private activitedRouter : ActivatedRoute,private navCtrl : NavController,private panierServ : PanierService ) {
    this.commande$ = this.panierServ.getCommande()
  }

  ngOnInit(): void {
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

    setInterval(()=> {
      this.tokenServ.getToken().then(data => {
        if (data != null) {
          let decoded = jwtDecode(data)
          let date = new Date
          if (date.getTime()/1000 >= decoded['exp']) {
            this.deconnect()
          }
        }
      })
      
    },1000)
  }

  ngAfterViewInit(): void {
    this.panierServ.restorePanier()
  }

  ngOnDestroy(): void {
    this.panierServ.savePanier().then();
  }

  @HostListener('window:beforeunload', ['$event'])
    beforeUnloadHander($event : Event) {
      this.panierServ.savePanier();      
    }
  
  deconnect() {
    let route = ''
    if (this.isLivreur) {
      route = '/connexion'
    }
    this.authServ.logout()
    this.router.navigateByUrl(route);
  }
}
