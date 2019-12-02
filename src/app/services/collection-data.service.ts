import { Injectable } from "@angular/core";
import { Collection } from "../interfaces/collection.interface";

@Injectable({
  providedIn: "root"
})
export class CollectionDataService {
  public collections: Collection[] = [];

  public addToCollection(collection: Collection): void {
    this.collections.push(collection);
    window.localStorage.setItem(
      "collections",
      JSON.stringify(this.collections)
    );
  }

  public getCollections(): Collection[] {
    if (!!localStorage.getItem("collections")) {
      return JSON.parse(localStorage.getItem("collections"));
    }
    return this.collections;
  }

  public addPhotosToCollection(id: number, urls: string[]): Collection {
    if (!!window.localStorage.getItem("photos")) {
      return JSON.parse(window.localStorage.getItem("photos"));
    }
    const collection = this.collections.find(i => i.id === id);
    collection.urls = urls;
    window.localStorage.setItem("photos", JSON.stringify(collection.urls));
    return collection;
  }

  public getSingleCollection(id: number): Collection {
    const collId = this.collections.find(coll => coll.id === id);
    return collId;
  }
}
