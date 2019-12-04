import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const loggedIn = AuthService.isLoggedIn();
    if (loggedIn) {
      this.router.navigateByUrl("/collections");
    }
    return !loggedIn;
  }
}
