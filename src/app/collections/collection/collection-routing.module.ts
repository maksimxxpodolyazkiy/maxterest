import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { CollectionsComponent } from '../collections.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


const routes: Routes = [
  { path: ':id', component: CollectionComponent }
]

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule
  ],
  exports: [
    RouterModule,
    CollectionsComponent,
    NgZorroAntdModule
  ]
})
export class CollectionRoutingModule { }
