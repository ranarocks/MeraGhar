
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { UploadimagesComponent } from './uploadimages/uploadimages.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthGuard } from './auth.guard'


export const AppRoutes: Routes =[
  { path: 'Upload', component: UploadimagesComponent }
  // { path: 'aregisteration', component: AregistrationComponent },
 

];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

