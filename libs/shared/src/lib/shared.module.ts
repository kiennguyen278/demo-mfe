import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedRoutes} from './lib.routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ZorroAntdModule} from "./zorro-antd.module";
import {LoginComponent} from "./components/login/login.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";


const components = [
  LoginComponent,
  AuthLayoutComponent,
  ContentLayoutComponent,
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedRoutes,
    ZorroAntdModule
  ],
})
export class SharedModule {}

