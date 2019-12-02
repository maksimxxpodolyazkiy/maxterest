import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./services/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CallbackPage } from "./callback/callback.page";
import { CollectionComponent } from "./collection/collection.component";
import { CollectionsComponent } from "./collections/collections.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Global } from "./providers/global";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { PhotosComponent } from "./photos/photos.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "collections",
    component: CollectionsComponent,
    canActivate: [AuthGuard]
  },
  { path: "collections/:id", component: CollectionComponent },
  { path: "auth", component: AuthComponent }, // TODO: NoAuth Guard
  { path: "photos", component: PhotosComponent },
  { path: "callback", component: CallbackPage },
  { path: "", redirectTo: "/collections", pathMatch: "full" },
  { path: "**", redirectTo: "/collections" }
];

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    PhotosComponent,
    CollectionsComponent,
    CallbackPage,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthService,
    AuthGuard,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
