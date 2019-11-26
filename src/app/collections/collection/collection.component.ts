import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {

  }

  // async onSearch(event, searchRequest: string) {

  //   if (event.key === "Enter" || event.type === "click") {
  //     if (!this.isNullOrWhitespace(searchRequest)) {
  //       this.navbarForm.get('searchText').setValue(searchRequest)
  //       this.headerForm.get('searchInputType').setValue('');
  //       this.isHeaderVisible = false;
  //       this.images = await this.imageService.searchImages(searchRequest);
  //       this._albums = [];

  //       for (let i = 0; i < this.images.length; i++) {
  //         let photo_tags = this.images[i].photo_tags.map(function(val) {
  //           return val.title;
  //         }).join(', ');

  //         const album = {
  //           src: this.images[i].urls.full,
  //           caption: "Description: " + this.images[i].description
  //           + "<br/>Uploaded user: " + this.images[i].user.name
  //           + "<br/>Photo tags: " + photo_tags
  //           + "<br/>Likes: " + this.images[i].likes,
  //           thumb: this.images[i].urls.thumb 
  //         };
  //         this._albums.push(album);
  //       }
  //     }
  //   }
  // }

  // isNullOrWhitespace(searchRequest: any): boolean {
  //   return !searchRequest || !searchRequest.trim();
  // }

}
