import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ:AuthService,private router : Router,private activatedRoute : ActivatedRoute,private tokenServ : TokenService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    let bool = true
    
    this.tokenServ.getToken().then (value => {
      if (value == null) {
        this.router.navigate(["/connexion"])
        bool = false
      }
    })
    if (!bool) {
      return bool
    }
    this.authServ.isAuthorized(route.data['role']).then(value => {
      setTimeout(() => {
        if (!value) {
          this.router.navigate(["/connexion"])
          bool = false
        }
      },1000);
    })

    return bool;
  }
  
}
