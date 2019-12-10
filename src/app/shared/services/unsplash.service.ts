import { Injectable } from "@angular/core";
import Unsplash from "unsplash-js";

@Injectable({
  providedIn: "root"
})
export class UnsplashService {
  public buildAuthentication(): Unsplash {
    const unsplashApi: Unsplash = new Unsplash({
      accessKey:
        "8ad318674f52e5c6b766fe2d4fa5496ed38818604a7358098c581dd107a52181",
      applicationId:
        "8ad318674f52e5c6b766fe2d4fa5496ed38818604a7358098c581dd107a52181",
      secret: "6b02c9b56496572446fdfd1b0c95e47ecfb4870cc126d27ed7e9f3896ae48e6f"
    });

    return unsplashApi;
  }
}
