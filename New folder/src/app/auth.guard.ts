import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterService} from './register.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: RegisterService){}
  
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(this.service.check()){
    return true;
  }
  else{
    return false;
  }
  
}
}
