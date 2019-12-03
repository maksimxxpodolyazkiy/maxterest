import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ImageService } from "../../services/image.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Album } from "../../interfaces/album.interface";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  public images: any[];
  public albums: any[];
  public searchbarForm: FormGroup;
  public selectedPhotos: string[] = [];
  public isSelected: boolean = false;

  @Output() public getSelectedPhotos = new EventEmitter();

  constructor(private imageService: ImageService) {}

  public ngOnInit(): void {
    this.searchbarForm = new FormGroup({
      searchText: new FormControl()
    });
  }

  public async onSearch(event, searchRequest: string): Promise<any> {
    if (event.key === "Enter" || event.type === "click") {
      if (!this.isNullOrWhitespace(searchRequest)) {
        this.searchbarForm.get("searchText").setValue(searchRequest);

        this.images = await this.imageService.searchImages(searchRequest);
        this.albums = [];

        for (const image of this.images) {
          const photoTags = image.photo_id
            .map((val: { title: any }) => val.title)
            .join(", ");

          const album: Album = {
            src: image.urls.full,
            caption:
              "Description: " +
              image.description +
              "<br/>Uploaded user: " +
              image.user.name +
              "<br/>Photo tags: " +
              photoTags +
              "<br/>Likes: " +
              image.likes,
            thumb: image.urls.thumb
          };
          this.albums.push(album);
          this.searchbarForm.get("searchText").setValue("");
        }
      }
    }
  }

  public isNullOrWhitespace(searchRequest: string): boolean {
    return !searchRequest || !searchRequest.trim();
  }

  public onToggleSelection(event): void {
    if (event.target.className === "selected") {
      event.target.className = "unselected";
      const idx = this.selectedPhotos.findIndex(
        item => item === event.target.currentSrc
      );

      this.selectedPhotos = [
        ...this.selectedPhotos.slice(0, idx),
        ...this.selectedPhotos.slice(idx + 1)
      ];
    } else {
      this.selectedPhotos = [...this.selectedPhotos, event.target.currentSrc];
    }
    this.getSelectedPhotos.emit(this.selectedPhotos);
  }
}
