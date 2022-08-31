import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { TokenService } from '../connexion/shared/services/token.service';
import { CommandeStoreService } from '../mes-commandes/shared/services/commande-store.service';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit,OnDestroy {
  
  constructor(private location : Location,private tokenServ : TokenService,private commandeStoreServ : CommandeStoreService) { }

  ngOnInit() {
    this.startScan().then(value =>{
      let data : [string,number] = JSON.parse(value);
      this.tokenServ.getUser().then(value =>{
        if (data[0] == value.login) {
          this.commandeStoreServ.$changerEtatCommande(data[1],'valide')
          this.stopScan()
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.stopScan()
  }

  startScan = async () => {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
  
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
    if (result.hasContent) {
      return result.content
    }
  };

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  back() {
    this.stopScan()
    this.location.back();
  }

  

}
