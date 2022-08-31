import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TokenService } from 'src/app/connexion/shared/services/token.service';
import { Livraison } from 'src/app/shared/models/livraison';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class LivraisonStoreService {

  token : string = ''
  headers : {}
  constructor(private http : HttpClient,private tokenServ : TokenService) { }

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

  $commandesClient = (login : string):Observable<any> => {
    return from(this.setToken()).pipe(
      switchMap((headers) => {
        return this.http.get<Livraison[]>(`${apiUrl}livraisons?livreur.login=${login}`,
          {
            headers: headers
          }
        ).pipe(
          map((data:any) => {
            return data["hydra:member"] as Livraison[]
          }),
          catchError((err) => {
            return throwError(() => console.log(err.error.message))
          })
        );
      })
    )
  }


  changeEtatLivraison$ = (id : number,etat : string):Observable<Livraison> => {
    let livraison : Livraison = {
      etat : etat
    }
    return from(this.setToken()).pipe(
      switchMap((headers) => {
        return this.http.put<Livraison>(`${apiUrl}livraisons/${id}`,livraison,
          {
            headers: headers
          }
        ).pipe(
          catchError((err) => {
            return throwError(() => console.log(err.error.message))
          })
        );
      })
    )
  }
}
