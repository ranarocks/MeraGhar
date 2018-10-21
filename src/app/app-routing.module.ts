
import {RouterModule,Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { UploadImagesComponent } from './Admin/UploadImages/uploadimages.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './LandingPage/home/home.component';


export const routes: Routes = [
  {
    path: 'upload',
    component: UploadImagesComponent
  },
  { path: 'grid', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);

