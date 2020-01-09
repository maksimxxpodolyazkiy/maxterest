import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CollectionsRoutingModule } from "./collections-routing.module";
import { CollectionsComponent } from "./collections.component";
import { CollectionsPipe } from "./collections.pipe";
import { CollectionModule } from "./modules/collection/collection.module";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    CollectionsRoutingModule,
    CollectionModule
  ],
  declarations: [CollectionsComponent]
})
export class CollectionsModule {}
