import { Component, OnInit, SimpleChanges } from "@angular/core";
import { longStackSupport } from "q";

interface Collection {
  id: number;
  name: string;
}

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit {
  collectionName = "";

  collections = [];
  collection: Collection;

  onLogged = false;
  isVisible = false;
  isVisibleName = false;
  isOkLoading = false;

  constructor() {}

  ngOnInit() {}

  showModalName(): void {
    this.isVisibleName = true;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    Object.assign(this.collection);
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleOkName(): void {
    this.collection = {
      name: this.collectionName,
      id: Math.floor(Math.random() * 1000000)
    };
    this.onAddCollection(this.collection);

    this.isVisibleName = false;
    this.collectionName = "";
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleCancelName(): void {
    this.isVisibleName = false;
  }

  onAddCollection(collect): void {
    if (!this.onLogged) {
      this.onLogged = true;
    }

    this.collections.push(collect);
  }
}
