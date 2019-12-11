import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { en_US, NgZorroAntdModule, NZ_I18N } from "ng-zorro-antd";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { CallbackPage } from "./components/callback/callback.page";
import { DropdownFormControlComponent } from "./components/form/components/dropdown-form-control/dropdown-form-control.component";
// import { CustomSelectComponent } from "./components/custom-select/custom-select.component";
import { DropdownComponent } from "./components/form/components/dropdown-form-control/dropdown/dropdown.component";
import { SelectorFormControlComponent } from "./components/form/components/selector-form-control/selector-form-control.component";
import { SelectorComponent } from "./components/form/components/selector-form-control/selector/selector.component";
import { FormComponent } from "./components/form/form.component";
import { CollectionModule } from "./modules/collections/modules/collection/collection.module";
import { Global } from "./shared/providers/global";
import { AuthService } from "./shared/services/auth.service";
import { ImageService } from "./shared/services/image.service";
import { reducers } from "./shared/store/reducers";
import { metaReducers } from "./shared/store/reducers/index";

@NgModule({
  declarations: [
    AppComponent,
    CallbackPage,
    AuthComponent,
    FormComponent,
    DropdownComponent,
    DropdownFormControlComponent,
    SelectorFormControlComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    ImageService,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
