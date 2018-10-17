import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UploadimagesComponent } from './UploadImages/uploadimages.component';
import {UploaddetailsService} from './Services/uploaddetails.service';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadimagesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadimagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [UploaddetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
