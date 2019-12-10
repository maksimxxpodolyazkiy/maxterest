import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionComponent } from "./collection.component";

const routes: Routes = [
  {
    path: "details/:id",
    component: CollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {}
