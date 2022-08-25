import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { SharedModule } from '../shared/shared.module';
import { CardProduitComponent } from './components/card-produit/card-produit.component';
import { PlusMoinsComponent } from './components/plus-moins/plus-moins.component';
import { FilterPricePipe } from './shared/pipes/filter-price.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    SwiperModule,
    SharedModule,
    
  ],
  declarations: [CataloguePage,CardProduitComponent,PlusMoinsComponent, FilterPricePipe]
})
export class CataloguePageModule {}
