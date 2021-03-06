import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ImageService } from "../../shared/services/image.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {
  public images: any;
  public searchbarForm: FormGroup;
  public selectedPhotos: string[] = [];
  public isSelected: boolean = false;

  @Output() public getSelectedPhotos: EventEmitter<
    string[]
  > = new EventEmitter();

  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.searchbarForm = new FormGroup({
      searchText: new FormControl()
    });
  }

  public onSearch(event, searchRequest: string): void {
    if (
      event.key === "Enter" ||
      event.type === "click" ||
      !this.isNullOrWhitespace(searchRequest)
    ) {
      this.searchbarForm.get("searchText").setValue(searchRequest);
      this.imageService.searchImages(searchRequest).subscribe(data => {
        this.images = data;
        this.cdr.markForCheck();
      });
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
