import { Injectable } from "@angular/core";
import { Collection } from "../interfaces/collection.interface";

@Injectable({
  providedIn: "root"
})
export class CollectionDataService {
  collections: Collection[] = [];
  constructor() {}

  addToCollection(collection: Collection): void {
    this.collections.push(collection);
  }

  getCollections() {
    return this.collections;
  }

  addPhotosToCollection(id: number, urls: string[]) {}

  getSingleCollection(id: number) {
    const collId = this.collections.find(coll => coll.id === id);
    return collId;
  }
}
