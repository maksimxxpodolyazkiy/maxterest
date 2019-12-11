import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CollectionsRoutingModule } from "./collections-routing.module";
import { CollectionsComponent } from "./collections.component";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    CollectionsRoutingModule
  ],
  declarations: [CollectionsComponent]
})
export class CollectionsModule {}
