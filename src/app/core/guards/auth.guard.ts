import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkToken();
  }
  canLoad(route: Route): boolean {
    return this.checkToken();
  }
  checkToken() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/user/login');
      return false;
    }
  }
}
