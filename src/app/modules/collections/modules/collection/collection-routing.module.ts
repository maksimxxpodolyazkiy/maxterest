import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionComponent } from "./collection.component";
import { CollectionGuard } from "./collection.guard";

const routes: Routes = [
  {
    path: "details/:id",
    component: CollectionComponent,
    canActivate: [CollectionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {}
