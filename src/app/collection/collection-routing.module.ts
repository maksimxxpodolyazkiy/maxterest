import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { PhotosComponent } from "../photos/photos.component";
import { CallbackPage } from "../callback/callback.page";

@NgModule({
  declarations: [PhotosComponent, CallbackPage],
  imports: [SharedModule, NgZorroAntdModule],
  exports: [NgZorroAntdModule]
})

export class CollectionsRoutingModule {}
