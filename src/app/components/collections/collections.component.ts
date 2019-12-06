import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Collection } from "../../interfaces/collection.interface";
import * as collectionsAction from "../../store/actions/collections";
import * as fromRoot from "../../store/reducers";

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit {
  public collectionName: string = "";

  public collections$: Observable<Collection[]>;
  public collection: Collection;

  public haveCollections: boolean = true;
  public isVisibleName: boolean = false;

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.collections$ = this.store.select(fromRoot.getCollections);
    this.store.pipe();
  }

  public showModalName(): void {
    this.isVisibleName = true;
  }

  public onEnter(): void {
    this.handleOkName();
  }

  public handleOkName(): void {
    this.store.dispatch(
      new collectionsAction.AddCollection({
        id: Math.floor(Math.random() * 100000),
        name: this.collectionName,
        urls: []
      })
    );
    this.isVisibleName = false;
    this.collectionName = "";
  }

  public handleCancelName(): void {
    this.isVisibleName = false;
  }
}
