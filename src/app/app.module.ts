import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { AuthComponent } from "./auth/auth.component";
import { CollectionsComponent } from "./collections/collections.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { PhotosComponent } from "./photos/photos.component";
import { Global } from "./providers/global";
import { CollectionComponent } from "./collection/collection.component";
import { CallbackPage } from "./callback/callback.page";

registerLocaleData(en);

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
