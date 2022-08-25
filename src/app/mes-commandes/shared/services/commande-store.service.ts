import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, interval, Observable, throwError,from } from 'rxjs';
import { catchError,map, retry, tap, timeout ,switchMap} from 'rxjs/operators';
import { TokenService } from 'src/app/connexion/shared/services/token.service';
import { Commande } from 'src/app/shared/models/commande';
import { environment } from 'src/environments/environment';

const  apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CommandeStoreService {
  token : string = '';
  headers : HttpHeaders
  constructor(private http : HttpClient,private tokenServ : TokenService ) {
  }

  async setToken() {
    const value = await this.tokenServ.getToken();
    this.token = value;
    if (value != null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json+ld',
        'Authorization': `Bearer ${value}`
      });
      return this.headers;
    }

  }

  $commandesClient = (etat : string):Observable<any> => {
    return from(this.setToken()).pipe(
      switchMap((headers) => {
        return this.http.get<any>(`${apiUrl}clients/0/commandes?etat=${etat}`,
          {
            headers: headers
          }
        ).pipe(
          map(data => {
            return data["hydra:member"];
          })
        );
      })
    )
  }


  $annulerCommande = (id : number):Observable<Commande> => {
    return this.http.put<Commande>(`${apiUrl}commandes/${id}/annule`,{})
  }

  async timeout() {
    await setTimeout(() => {
      
    }, 1000);
  }


}
