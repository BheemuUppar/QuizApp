import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){
    
  }
  canActivate(){
  if(localStorage.getItem('currentUser') !== null){
    return true;
  }
  else{
    alert('To access this Test need to Login first!');
  this.router.navigateByUrl('login');
    return false;  
  }
  }
  
}
