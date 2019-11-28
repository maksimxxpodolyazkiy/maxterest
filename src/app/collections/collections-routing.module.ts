import { NgModule } from "@angular/core";
import { CollectionsComponent } from "./collections.component";
import { SharedModule } from "../shared/shared.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PhotosComponent } from "../photos/photos.component";
import { CallbackPage } from "../callback/callback.page";

@NgModule({
  declarations: [CollectionsComponent, PhotosComponent, CallbackPage],
  imports: [SharedModule, NgZorroAntdModule, NzButtonModule],
  exports: [NgZorroAntdModule]
})
export class CollectionsRoutingModule { }
