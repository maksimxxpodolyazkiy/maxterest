import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { NoAuthGuard } from "./components/auth/no-auth.guard";
import { CallbackPage } from "./components/callback/callback.page";

const routes: Route[] = [
  { path: "", redirectTo: "collections", pathMatch: "full" },
  {
    path: "collections",
    loadChildren: "./modules/collections/collections.module#CollectionsModule",
    canActivate: [AuthGuard]
  },
  { path: "auth", component: AuthComponent, canActivate: [NoAuthGuard] },
  { path: "callback", component: CallbackPage },
  { path: "**", redirectTo: "collections" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
