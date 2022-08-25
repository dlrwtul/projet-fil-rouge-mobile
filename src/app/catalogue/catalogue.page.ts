import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom,EffectFade  } from 'swiper';
import { IonContent, IonicSlides,IonList,IonSelect, RangeCustomEvent } from '@ionic/angular';
import { CatalogueStoreService } from './shared/services/catalogue-store.service';
import { Observable } from 'rxjs';
import { Catalogue } from './shared/models/catalogue';
import { Produit } from './shared/models/produit';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom,EffectFade, IonicSlides]);


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  
  catalogue$ : Observable<Catalogue>
  produits : Produit[] = []
  index = 'produits'
  showLoader = false
  @ViewChild(IonContent) content: IonContent;
  minPrice : number = 1000
  maxPrice : number = 10000
  minPriceValue : number = this.minPrice
  maxPriceValue : number = this.maxPrice
  objVal = {
    lower : this.minPrice,
    upper : this.maxPrice
  }
  constructor(private catalogueServ : CatalogueStoreService) { }

  ngOnInit() {
    this.catalogue$ = this.catalogueServ.catalogue$()
  }

  gotToTop() {
    this.content.scrollToTop(1000);
  }

  segmentChanged(event : Event) {
    this.showLoader = true
    setTimeout(() => {
      this.showLoader = false
    }, 500);
  }

  onIonChange(event : Event) {
    let rangeVal = (event as RangeCustomEvent).detail.value;
    this.objVal.lower = parseInt(rangeVal['lower'])
    this.objVal.upper = parseInt(rangeVal['upper']) 
    this.showLoader = true
    setTimeout(() => {
      this.showLoader = false
    }, 1000); 
  }
  

}
