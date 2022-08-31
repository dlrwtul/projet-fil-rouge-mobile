import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../models/catalogue';

const url = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {

  constructor(private http:HttpClient) { }
  catalogue$ = ():Observable<Catalogue> => {
    return this.http.get<Catalogue>(`${url}catalogues/1`).pipe(
      retry(3),
      map(data => {
        data.produits = [...data.burgers,...data.menus]
        return data
      })
    )
  }
}
