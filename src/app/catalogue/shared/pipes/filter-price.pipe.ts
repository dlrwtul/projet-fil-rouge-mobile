import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../models/produit';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(value: Produit[],object: {lower : number,upper : number}): Produit[] {
    
    if (value == null) {
      return []
    }
    if (value.length === 0 || !object) {
      return value;
    }
    let filteredCommandes: Produit[] = [];
    
    return value.filter((produit) => {
      if (produit.prix >= object.lower && produit.prix <= object.upper) {
        return produit
      }
    });
  }

}
