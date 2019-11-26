import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PhotosComponent } from '../photos/photos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    CollectionsComponent,
    PhotosComponent
  ],
  imports: [
    SharedModule,
    NgZorroAntdModule
  ],
  exports: [
    NgZorroAntdModule
  ]
})
export class CollectionsRoutingModule { }
