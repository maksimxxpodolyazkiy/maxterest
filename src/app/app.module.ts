import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { en_US, NgZorroAntdModule, NZ_I18N } from "ng-zorro-antd";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { CallbackPage } from "./components/callback/callback.page";
import { CollectionComponent } from "./components/collections/collection/collection.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { Global } from "./providers/global";
import { AuthService } from "./services/auth.service";
import { ImageService } from "./services/image.service";

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
    ImageService,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
