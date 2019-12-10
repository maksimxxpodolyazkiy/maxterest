import { Injectable } from "@angular/core";
import { Global } from "../providers/global";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private global: Global) {}

  public async searchImages(
    userInput: string,
    pageIndex: number = 1,
    elementsPerPage: number = 10
  ): Promise<any> {
    const response = await this.global.UNSPLASH_API.search.photos(
      userInput,
      pageIndex,
      elementsPerPage
    );
    const json = await response.json();
    return json.results;
  }
}
