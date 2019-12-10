import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionsComponent } from "./collections.component";

const routes: Routes = [
  { path: "", component: CollectionsComponent },
  {
    path: "details",
    loadChildren: "./collection/collection.module#CollectionModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {}
