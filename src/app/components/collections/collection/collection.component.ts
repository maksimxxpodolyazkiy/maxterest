import { ActivatedRoute, Params } from "@angular/router";
import { Collection } from "../../../interfaces/collection.interface";
import { Component, OnInit } from "@angular/core";
import { CollectionDataService } from "../../../services/collection-data.service";

@Component({
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"]
})
export class CollectionComponent implements OnInit {
  public collection: Collection;
  public selectedPhotos: string[];
  public id: number;

  public isVisible: boolean = false;

  constructor(
    private collsDataService: CollectionDataService,
    private route: ActivatedRoute
  ) {}

  // public ngOnChanges(changes: SimpleChanges): void {
  //   if (!!localStorage.getItem("photos")) {
  //     this.collection.urls = JSON.parse(localStorage.getItem("photos"));
  //   }
  //   console.log(changes);
  // }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.collsDataService.getSingleCollection(+params.id).subscribe(col => {
        this.collection = col;
      });
      this.id = +params.id;
    });
  }

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
    this.collsDataService.addPhotosToCollection(this.id, this.selectedPhotos);
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public getSelectedPhotos(e: string[]): void {
    this.selectedPhotos = e;
  }
}
