import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Collection } from "../../shared/interfaces/collection.interface";
import * as collectionsAction from "../../shared/store/actions/collections";
import * as fromRoot from "../../shared/store/reducers";

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit {
  public collectionName: string = "";

  public collections$: Observable<Collection[]>;

  public isVisibleName: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.collections$ = this.store.select(fromRoot.getCollections);
  }

  public navigateToCollection(id: number): void {
    this.router.navigate([`details`, id], {
      relativeTo: this.route
    });
  }

  public showModalName(): void {
    this.isVisibleName = true;
  }

  public onEnter(): void {
    this.handleOkName();
  }

  public handleOkName(): void {
    this.store.dispatch(
      collectionsAction.AddCollection({
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
