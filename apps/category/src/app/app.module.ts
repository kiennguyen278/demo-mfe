import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppCategoryRoutes} from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCategoryRoutes,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
