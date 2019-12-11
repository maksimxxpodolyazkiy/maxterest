import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { en_US, NgZorroAntdModule, NZ_I18N } from "ng-zorro-antd";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { CallbackPage } from "./components/callback/callback.page";
import { CollectionModule } from "./modules/collections/modules/collection/collection.module";
import { Global } from "./shared/providers/global";
import { AuthService } from "./shared/services/auth.service";
import { ImageService } from "./shared/services/image.service";
import { reducers } from "./shared/store/reducers";
import { metaReducers } from "./shared/store/reducers/index";

@NgModule({
  declarations: [AppComponent, CallbackPage, AuthComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CollectionModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
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
