import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ROUTING } from "./app-routing.module";
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
  import { UploadImagesComponent } from './Admin/UploadImages/uploadimages.component';
  import {UploadDetailsService} from './Services/uploaddetails.service';
  import { ContactComponent } from './contact/contact.component';
  import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './LandingPage/home/home.component';
import { CarouselComponent } from './LandingPage/carousel/carousel.component';
import { ActivityListComponent } from './LandingPage/activity-list/activity-list.component';
import { PopularListComponent } from './LandingPage/popular-list/popular-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImagesComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    ActivityListComponent,
    PopularListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    AgGridModule.withComponents([]),
    ROUTING
  ],
  providers: [UploadDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
