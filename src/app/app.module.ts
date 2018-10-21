import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ROUTING } from "./app-routing.module";
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
  import { UploadImagesComponent } from './UploadImages/uploadimages.component';
  import {UploadDetailsService} from './Services/uploaddetails.service';
  import { ContactComponent } from './contact/contact.component';
  import { HeaderComponent } from './header/header.component';
  import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './LandingPage/home/home.component';


//const routes: Routes = [
//  {
//    path: 'upload',
//    component: UploadimagesComponent
//  },
//  { path: 'grid', component: ContactComponent },
//  { path: 'home', component: HomeComponent },
//  { path: '',redirectTo: 'home',pathMatch: 'full'}
//];

@NgModule({
  declarations: [
    AppComponent,
    UploadImagesComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent
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
