import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ROUTING } from "./app-routing.module";
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
  import { UploadimagesComponent } from './UploadImages/uploadimages.component';
  import {UploaddetailsService} from './Services/uploaddetails.service';
  import { ContactComponent } from './grid/contact/contact.component';
  import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


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
    UploadimagesComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    AgGridModule.withComponents([]),
    ROUTING
  ],
  providers: [UploaddetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
