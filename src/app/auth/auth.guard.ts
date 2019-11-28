import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const loggedIn = AuthService.isLoggedIn();
    if (!loggedIn) {
      this.router.navigateByUrl("/auth");
    }
    return loggedIn;
  }
}

// export class AuthGuard implements CanActivate {

//   constructor(private auth: AuthService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
//     return this.auth.isAuthenticated$.pipe(
//       tap(loggedIn => {
//         if (!loggedIn) {
//           this.auth.login(state.url);
//         }
//       })
//     );
//   }

// }
