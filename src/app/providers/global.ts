import { Injectable } from "@angular/core";
import Unsplash from "unsplash-js";
import { UnsplashService } from "../services/unsplash.service";

@Injectable()
export class Global {
  public readonly UNSPLASH_API: Unsplash = this.service.buildAuthentication();
  constructor(private service: UnsplashService) {}
}
