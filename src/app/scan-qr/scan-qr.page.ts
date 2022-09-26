import { Component, ContentChildren, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { TokenService } from '../connexion/shared/services/token.service';
import { CommandeStoreService } from '../mes-commandes/shared/services/commande-store.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})

export class ScanQrPage implements OnInit,AfterViewInit {

  isTorch : boolean = false
  isEnabled : boolean = true
  @ViewChild('scanner') scanner: ZXingScannerComponent; 

  constructor(private location : Location,private toastController : ToastController,private tokenServ : TokenService,private commandeStoreServ : CommandeStoreService) { }

  async presentToast(message : string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position : 'top',
    });
    toast.present();
  }

  ngAfterViewInit(): void {
    this.scanner.previewElemRef.nativeElement.style.width = '100vw'
    this.scanner.previewElemRef.nativeElement.style.minHeight = '100vh'
    this.scanner.previewFitMode = 'cover'
  }

  ngOnInit() {
  }

  getSuccess(value : string) {
    let data : [string,number] = JSON.parse(value);    
    this.tokenServ.getUser().then(value =>{
      if (data[0] == value.login) {
        this.commandeStoreServ.$changerEtatCommande(data[1],'valide')
        this.stopScan()
        this.presentToast('Commande Validée')
      } else {
        this.presentToast('Commande Inconnue')
      }
    })
  }

  changeTorcheState(bool : boolean) {
    this.isTorch = bool
  }

  changeState(bool : boolean) {
    this.isEnabled = bool
    if (this.isEnabled == false) {
      this.back()
    }
  }

  stopScan(): void {
    this.isEnabled = false
    this.back()
  }

  back() {
    this.location.back();
  }

}
