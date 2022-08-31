import { Pipe, PipeTransform } from '@angular/core';
import { Livraison } from 'src/app/shared/models/livraison';

@Pipe({
  name: 'etat'
})
export class EtatPipe implements PipeTransform {

  transform(value: Livraison[]|null,etat: string): Livraison[] | null {
    
    if (value == null) {
      return null
    }
    if (etat == '') {
      return value;
    }
    
    return value.filter(livraison =>  {
      if (livraison.etat == etat) {
        return livraison
      }
    });
  }

}
