import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private authserv:AuthService){}
  canActivate():Observable<boolean> {
    return this.authserv.AppUser$.pipe(map(appUser => appUser.isAdmin ))
  }
  
}
