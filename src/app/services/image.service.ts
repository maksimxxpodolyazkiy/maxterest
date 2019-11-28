import { Injectable } from "@angular/core";
import { Global } from "../providers/global";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private global: Global) {}

  searchImages(
    userInput: String,
    pageIndex: number = 1,
    elementsPerPage: number = 10
  ): Promise<any> {
    return this.global.UNSPLASH_API.search
      .photos(userInput, pageIndex, elementsPerPage)
      .then(response => response.json())
      .then(json => json.results);
  }
}
