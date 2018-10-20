
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { UploadimagesComponent } from './UploadImages/uploadimages.component';
import { UploaddetailsService } from './Services/uploaddetails.service';
import { ContactComponent } from './grid/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthGuard } from './auth.guard'


export const routes: Routes = [
  {
    path: 'upload',
    component: UploadimagesComponent
  },
  { path: 'grid', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);

