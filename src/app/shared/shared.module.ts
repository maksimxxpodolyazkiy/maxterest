import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule]
})
export class SharedModule {}
