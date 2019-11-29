import { Component, OnInit } from "@angular/core";
import { CollectionDataService } from "../services/collection-data.service";
import { Collection } from "../interfaces/collection.interface";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"]
})
export class CollectionComponent implements OnInit {
  collection: Collection;

  isVisible = false;
  isOkLoading = false;

  haveCollections = true;

  constructor(
    private collsDataService: CollectionDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.collection = this.collsDataService.getSingleCollection(+params.id);
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
