import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from 'src/app/shared/models/commande';

@Pipe({
  name: 'filterEtat'
})
export class FitlterEtatPipe implements PipeTransform {

  transform(value: Commande[]|null,etat: string): Commande[] {
    
    if (value == null) {
      return []
    }
    if (value.length === 0 || !etat) {
      return value;
    }

    return value.filter((commande : Commande) => {
      if (commande.etat == etat) {
        return commande
      }
    });
  }

}
