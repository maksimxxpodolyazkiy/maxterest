import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Collection } from "../../../interfaces/collection.interface";
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
