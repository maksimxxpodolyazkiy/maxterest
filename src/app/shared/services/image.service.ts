import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UnsplashService } from "./unsplash.service";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private service: UnsplashService) {}

  public searchImages(searchText): Observable<string[]> {
    return this.service
      .getPhotosFromUnsplash(searchText)
      .pipe(map(data => data.results.map(item => item.urls.regular)));

    // const response = await this.global.UNSPLASH_API.search.photos(
    //   userInput,
    //   pageIndex,
    //   elementsPerPage
    // // );

    // const json = await response.json();
    // return json.results;
  }
}
