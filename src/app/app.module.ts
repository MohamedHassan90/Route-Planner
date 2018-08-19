import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouteModule} from './app-route.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanComponent } from './plan/plan.component';
import { RouteListComponent } from './route-list/route-list.component';
import {RouteService} from './shared/route.service';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import {SliderModule} from './Slider/slider.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanComponent,
    RouteListComponent,
    HomePageComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule, AppRouteModule, FormsModule, BrowserAnimationsModule, SliderModule, HttpModule
  ],
  providers: [RouteService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
