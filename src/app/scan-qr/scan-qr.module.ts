import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { ScanQrPageRoutingModule } from './scan-qr-routing.module';

import { ScanQrPage } from './scan-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ScanQrPage]
})
export class ScanQrPageModule {}
