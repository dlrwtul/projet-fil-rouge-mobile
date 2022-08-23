import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailsProduitComplement } from 'src/app/catalogue/shared/models/details-produit-complement';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl

@Injectable({
  providedIn: 'root'
})


export class DetailProduitStoreService {

  constructor(private http:HttpClient) { }


  getWithComplements$ = (id:number):Observable<DetailsProduitComplement> => {
    return this.http.get<DetailsProduitComplement>(`${url}detailsProduitComplements/${id}`).pipe(
      map(data => {
        if (data.menu != null) {
          data.produit = data.menu;
        }
        if (data.burger != null) {
          data.produit = data.burger;
        }
        return data
      })
    )
  }
}
