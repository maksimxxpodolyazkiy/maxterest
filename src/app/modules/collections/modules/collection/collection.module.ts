import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { PhotosComponent } from "../../../../components/photos/photos.component";
import { CollectionsPipe } from "../../collections.pipe";
import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionComponent } from "./collection.component";

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CollectionComponent, PhotosComponent, CollectionsPipe],
  exports: [CollectionsPipe]
})
export class CollectionModule {}
