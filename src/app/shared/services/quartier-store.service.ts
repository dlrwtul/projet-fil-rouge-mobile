import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Quartier } from '../models/quartier';
const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class QuartierStoreService {

  constructor(private http:HttpClient) { }

  quartiers$ = ():Observable<Quartier[]> => {
    return this.http.get<any>(`${apiUrl}quartiers`).pipe(
      map(data => {
        return data["hydra:member"]
      })
    )
  }
}
