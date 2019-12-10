// Saving this service just as example

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Collection } from "../interfaces/collection.interface";

@Injectable({
  providedIn: "root"
})
export class CollectionDataService {
  public behSubj: BehaviorSubject<Collection[]> = new BehaviorSubject<
    Collection[]
  >(
    !!localStorage.getItem("collections")
      ? JSON.parse(localStorage.getItem("collections"))
      : []
  );

  constructor() {
    this.behSubj.subscribe(item => {
      localStorage.setItem("collections", JSON.stringify(item));
    });
  }

  public addToCollection(collection: Collection): void {
    this.behSubj.next([...this.behSubj.getValue(), collection]);
  }

  public addPhotosToCollection(id: number, urls: string[]): void {
    const value = this.behSubj.getValue();
    const collection = value.find(i => i.id === id);
    collection.urls = [...collection.urls, ...urls];
    this.behSubj.next(value);
  }

  public getSingleCollection(id: number): Observable<Collection> {
    return Observable.create(subscriber => {
      this.behSubj.subscribe(x => {
        const colls = x;
        const collId = colls.find(c => c.id === id);
        subscriber.next(collId);
      });
    });
  }
}
