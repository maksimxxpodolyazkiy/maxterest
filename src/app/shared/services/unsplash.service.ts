import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UnsplashApiResponse } from "../interfaces/unsplash-api-response.interface";

@Injectable({
  providedIn: "root"
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  public getPhotosFromUnsplash(searchText): Observable<UnsplashApiResponse> {
    return this.http.get<UnsplashApiResponse>(
      `https://api.unsplash.com/search/photos?query=${searchText}&per_page=12&page=2`
    );
  }
}
