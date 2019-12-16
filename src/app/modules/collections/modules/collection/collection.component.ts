import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Collection } from "../../../../shared/interfaces/collection.interface";
import * as collectionsAction from "../../../../shared/store/actions/collections";
import * as fromRoot from "../../../../shared/store/reducers";

@Component({
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"]
})
export class CollectionComponent implements OnInit, OnDestroy {
  public selectedPhotos: string[];
  public id: number;
  public collection: Collection;
  public collection$: Subscription;

  public isVisible: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.collection$ = this.store
        .select(fromRoot.getSingleCollection(+params.id))
        .subscribe(data => {
          this.collection = data;
        });
      this.id = +params.id;
    });
  }

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
    this.store.dispatch(
      new collectionsAction.AddPhotosToCollection({
        id: this.id,
        urls: this.selectedPhotos
      })
    );
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public getSelectedPhotos(e: string[]): void {
    this.selectedPhotos = e;
  }

  public ngOnDestroy(): void {
    this.collection$.unsubscribe();
  }
}
