import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom,EffectFade  } from 'swiper';
import { IonContent, IonicSlides,IonList,IonSelect } from '@ionic/angular';
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
  constructor(private catalogueServ : CatalogueStoreService) { }

  ngOnInit() {
    this.catalogue$ = this.catalogueServ.catalogue$()
  }

  scrollContent() {

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
  

}
