import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { ImageService } from "../services/image.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit, OnChanges {
  public images: Array<any>;
  public albums: Array<any> = [];
  headerForm: FormGroup;
  navbarForm: FormGroup;
  selectedPhotos: Array<string> = [];
  public isSelected = false;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.navbarForm = new FormGroup({
      searchText: new FormControl()
    });

    this.headerForm = new FormGroup({
      searchInputType: new FormControl()
    });
  }

  async onSearch(event, searchRequest: string) {
    if (event.key === "Enter" || event.type === "click") {
      if (!this.isNullOrWhitespace(searchRequest)) {
        this.navbarForm.get("searchText").setValue(searchRequest);
        this.headerForm.get("searchInputType").setValue("");

        this.images = await this.imageService.searchImages(searchRequest);
        this.albums = [];

        for (let i = 0; i < this.images.length; i++) {
          let photo_tags = this.images[i].photo_id
            .map(function(val) {
              return val.title;
            })
            .join(", ");

          const album = {
            src: this.images[i].urls.full,
            caption:
              "Description: " +
              this.images[i].description +
              "<br/>Uploaded user: " +
              this.images[i].user.name +
              "<br/>Photo tags: " +
              photo_tags +
              "<br/>Likes: " +
              this.images[i].likes,
            thumb: this.images[i].urls.thumb
          };
          this.albums.push(album);
        }
      }
    }
  }

  isNullOrWhitespace(searchRequest: string): boolean {
    return !searchRequest || !searchRequest.trim();
  }

  onSelect(event) {
    this.selectedPhotos = [...this.selectedPhotos, event.target.currentSrc];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
