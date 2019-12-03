import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { CallbackPage } from "./components/callback/callback.page";
import { CollectionComponent } from "./components/collections/collection/collection.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { NgModule } from "@angular/core";
import { PhotosComponent } from "./components/photos/photos.component";
import { RouterModule, Route } from "@angular/router";
import { NoAuthGuard } from "./components/auth/no-auth.guard";

const routes: Route[] = [
  {
    path: "collections",
    component: CollectionsComponent,
    canActivate: [AuthGuard]
  },
  { path: "collections/:id", component: CollectionComponent },
  { path: "auth", component: AuthComponent, canActivate: [NoAuthGuard] },
  { path: "photos", component: PhotosComponent },
  { path: "callback", component: CallbackPage },
  { path: "", redirectTo: "collections", pathMatch: "full" },
  { path: "**", redirectTo: "collections" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
