import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { NoAuthGuard } from "./components/auth/no-auth.guard";
import { CallbackPage } from "./components/callback/callback.page";
import { CollectionComponent } from "./components/collections/collection/collection.component";
import { CollectionGuard } from "./components/collections/collection/collection.guard";
import { CollectionsComponent } from "./components/collections/collections.component";
import { PhotosComponent } from "./components/photos/photos.component";

const routes: Route[] = [
  { path: "", redirectTo: "collections", pathMatch: "full" },
  {
    path: "collections",
    component: CollectionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "collections/:id",
    component: CollectionComponent,
    canActivate: [CollectionGuard]
  },
  { path: "photos", component: PhotosComponent },
  { path: "auth", component: AuthComponent, canActivate: [NoAuthGuard] },
  { path: "callback", component: CallbackPage },
  { path: "**", redirectTo: "collections" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
