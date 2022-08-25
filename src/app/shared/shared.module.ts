import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent
  ],
  imports: [
  CommonModule,
    IonicModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
