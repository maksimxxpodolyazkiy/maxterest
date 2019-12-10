import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as fromRoot from "../../../store/reducers/index";

@Injectable({
  providedIn: "root"
})
export class CollectionGuard implements CanActivate {
  public id: number;
  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | boolean {
    return this.store
      .select(fromRoot.getSingleCollection(+route.params.id))
      .pipe(
        map(coll => {
          if (!coll) {
            this.router.navigateByUrl("collections");
            return false;
          }
          return true;
        })
      );
  }
}
