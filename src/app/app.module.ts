import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./AppRoutingModule";
import {TokenInterceptor} from "./token/TokenInterceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeTeacherComponent } from './pages/home-teacher/home-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeTeacherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
