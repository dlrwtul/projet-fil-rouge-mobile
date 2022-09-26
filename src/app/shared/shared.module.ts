import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { CompteurComponent } from './compteur/compteur.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from '../tabs/tabs.component';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    CompteurComponent,
    
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
    HeaderComponent,
    CompteurComponent
  ]
})
export class SharedModule { }
