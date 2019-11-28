import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"]
})
export class CollectionsComponent implements OnInit {
  onLogged = false;

  collections = [];

  isVisible = false;
  isOkLoading = false;

  constructor() {}

  ngOnInit() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onAddCollection() {
    if (!this.onLogged) {
      this.onLogged = true;
    }
    const collection = {};
    this.collections.push(collection);
  }
}
