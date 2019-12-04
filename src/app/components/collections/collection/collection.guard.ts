import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, from, of, Subscription } from "rxjs";
import { CollectionDataService } from "src/app/services/collection-data.service";

@Injectable({
  providedIn: "root"
})
export class CollectionGuard implements CanActivate {
  public id: number;
  constructor(private data: CollectionDataService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Subscription> {
    const subj = this.data
      .getSingleCollection(+route.params.id)
      .subscribe(x => {
        if (!x) {
          this.router.navigateByUrl("collections");
          return false;
        }
        return true;
      });
    const obs = of(subj);
    return obs;
  }
}
