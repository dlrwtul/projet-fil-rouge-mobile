import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './connexion/shared/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from './connexion/shared/services/token.service';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Animation, AnimationController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isConnected : boolean ;

  constructor(private authServ : AuthService,private location : Location,private storage : Storage,private tokenServ : TokenService,private router : Router,private activitedRouter : ActivatedRoute,private navCtrl : NavController ) {
    
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {

      this.tokenServ.getToken().then (value => {
        if (value != null) {
          this.isConnected = true
        }else {
          this.isConnected = false
        }
      })
  });
  }

  
  deconnect() {
    this.authServ.logout()
    this.router.navigateByUrl('');
  }
}
