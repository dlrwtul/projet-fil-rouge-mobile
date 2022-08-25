import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { TokenService } from './token.service';
import jwt_decode from "jwt-decode";
import { EventService } from 'src/app/shared/services/event-service.service';
import { Router } from '@angular/router';

const SECURITY_API_URL = "https://lang-projet-fil-rouge-api.herokuapp.com/api/"
const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isConnected : boolean = false
  private isLvr : boolean = false
  private isClt : boolean = false

  constructor(private http:HttpClient,private tokenServ : TokenService,private eventServ : EventService,private router : Router) { }

  isAuthentificated(){
    this.tokenServ.getToken().then(value => {
      if (value != null) {  
        this.isConnected = true
      }else {
        this.isConnected = false
      }
    })

    return this.isConnected
  }

  async isAuthorized(role : string) {
    let bool = false
    await this.tokenServ.getToken().then(value => {
      let decoded : any = jwt_decode(value) 
      if (decoded.roles.indexOf(role) != -1) {
        bool = true
      } 
    })
    return bool
  }

  isLivreur() {
    this.tokenServ.getToken().then(value => {
        let decoded : any = jwt_decode(value)  
        if (decoded.roles[0] == 'ROLE_CLIENT') {
          this.isLvr = true
      }      
    })    
    return this.isLvr
  }

  $connexion = (user : User):Observable<any> => {
    return this.http.post<any>(`${SECURITY_API_URL}login`,user,options).pipe(
      catchError((err) => {
        return throwError(() => err)
      })
    )
  }

  $inscription = (user : User,role : string):Observable<any> => {
    return this.http.post<any>(`${SECURITY_API_URL}${role}`,user,options).pipe(
      catchError((err) => {
        return throwError(() => err)
      })
    )
  }

  logout() {
    this.tokenServ.clearToken()
  }

}
