import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UploadDetailsService} from 'src/app/Services/uploaddetails.service';

@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.component.html',
  styleUrls: ['./uploadimages.component.css']
})
export class UploadImagesComponent implements OnInit {
  img:string="data:image/jpeg;base64,";
  stateList = [];
  Logo:any;
  model: any = { 
};
  @ViewChild('myForm')
  private myForm: NgForm;

  constructor(private router: Router, private _UploadDetailsService: UploadDetailsService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.model.Logo =   event.target.files[0]
    let reader = new FileReader();
    reader.onload = (e: any) => {
        this.model.Logo = e.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  register(modeldata){
    if(modeldata.Logo!=null){
      modeldata.Logo=  modeldata.Logo.split(",")[1];
    }
    
    // this._companyService.CreateCompany(modeldata).subscribe(tes => {
    //   const data :any = tes;
    //   if (data && data.StatusCode==1) {
    //     modeldata.Logo = this.img + modeldata.Logo;
    //     alert(data.Messages[0]);
    //   }
    // },
    //   error => {
    //     alert(error);
    //   });
  }
  

}

