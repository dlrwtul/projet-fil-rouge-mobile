import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { User } from './shared/models/user';
import { AuthService } from './shared/services/auth.service';
import { TokenService } from './shared/services/token.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  myForm : FormGroup = new FormGroup({})
  user : User
  constructor(private formBuilder : FormBuilder,private authServ : AuthService,private tokenServ : TokenService,private toastController : ToastController,private router : Router,private navCtrl : NavController) { }

  async presentToast(message : string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      login: ['',[Validators.required,Validators.email]],
      password : ['',Validators.required]
    })
  }

  onSubmit() {
    this.user = this.myForm.value;
    this.authServ.$connexion(this.user).subscribe({
      next : (value) => {
        this.tokenServ.setToken(value.token)
        this.tokenServ.setUser(this.user)
        this.presentToast("Connexion Reussie")

        this.authServ.isClient().then(bool => {
          if (bool) {
            this.router.navigate(["/mes-commandes"])
          }
        })

        this.authServ.isLivreur().then(bool => {
          if (bool) {
            this.router.navigate(["/mes-livraisons"])
          }
        })
        
        this.myForm.reset()
      },
      error : (err) => {
        this.presentToast("Connexion Echouée")
      },
    })
    
  }

}
