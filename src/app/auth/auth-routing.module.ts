import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    NgZorroAntdModule,
    NzButtonModule
  ],
  exports: [
    AuthComponent,
    NgZorroAntdModule,
    NzButtonModule
  ]
})
export class AuthRoutingModule { }