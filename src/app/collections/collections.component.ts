import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";

interface Collection {
  id: any
}

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit, OnChanges {
  onLogged = false;

  collections = [];
  collection: Collection = {
    id: Math.floor(Math.random() * 1000000)
  }

  isVisible = false;
  isOkLoading = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    Object.assign(this.collection)
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onAddCollection(): void {
    if (!this.onLogged) {
      this.onLogged = true;
    }

    this.collections.push(this.collection);
    
  }
}
