import { Component, OnInit } from "@angular/core";
import { Collection } from "../../interfaces/collection.interface";
import { CollectionDataService } from "../../services/collection-data.service";

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit {
  public collectionName: string = "";

  public collections: Collection[] = [];

  public haveCollections: boolean = true;
  public isVisibleName: boolean = false;

  constructor(private collsDataService: CollectionDataService) {}

  public ngOnInit(): void {
    this.collsDataService.behSubj.subscribe(x => {
      this.collections = x;
    });
  }

  public showModalName(): void {
    this.isVisibleName = true;
  }

  public handleOkName(): void {
    this.collsDataService.addToCollection({
      id: Math.floor(Math.random() * 100000),
      name: this.collectionName,
      urls: []
    });

    this.isVisibleName = false;
    this.collectionName = "";
  }

  public handleCancelName(): void {
    this.isVisibleName = false;
  }
}
