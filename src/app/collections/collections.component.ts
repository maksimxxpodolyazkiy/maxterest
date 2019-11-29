import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { CollectionDataService } from "../services/collection-data.service";

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit, OnChanges {
  collectionName = "";

  collections = [];
  haveCollections = true;

  isVisibleName = false;

  constructor(private collsDataService: CollectionDataService) {}

  ngOnInit() {
    this.collections = this.collsDataService.getCollections();
  }

  showModalName(): void {
    this.isVisibleName = true;
  }

  handleOkName(): void {
    this.collsDataService.addToCollection({
      id: Math.floor(Math.random() * 100000),
      name: this.collectionName,
      urls: []
    });

    this.isVisibleName = false;
    this.collectionName = "";
  }

  handleCancelName(): void {
    this.isVisibleName = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
