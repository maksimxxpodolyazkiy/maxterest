import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { AuthService } from "./services/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CallbackPage } from "./components/callback/callback.page";
import { CollectionComponent } from "./components/collections/collection/collection.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Global } from "./providers/global";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { PhotosComponent } from "./components/photos/photos.component";
import { AppRoutingModule } from "./app-routing.module";

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
    AppRoutingModule
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
