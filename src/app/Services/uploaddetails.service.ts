import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadDetailsService {

  constructor(private http:HttpClient) { }

  GetAllImagesData(){
    return this.http.get('http://localhost/SBMSservices/'+"common/GetAllStates");
  }

  UploadImages(data){
    return this.http.post('http://localhost/SBMSservices/' + 'company/create', data);
  }
}
