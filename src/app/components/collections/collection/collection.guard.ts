import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CollectionDataService } from "src/app/services/collection-data.service";

@Injectable({
  providedIn: "root"
})
export class CollectionGuard implements CanActivate {
  public id: number;
  constructor(private data: CollectionDataService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | boolean {
    return this.data.getSingleCollection(+route.params.id).pipe(
      map(collection => {
        if (!collection) {
          this.router.navigateByUrl("collections");
          return false;
        }
        return true;
      })
    );
  }
}
