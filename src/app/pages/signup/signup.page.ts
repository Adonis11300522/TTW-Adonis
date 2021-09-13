import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:any = '';
  password:any = '';
  firstname:any = '';
  lastname:any = '';
  err: any;
  phone:any= '';
  constructor(
    private navCtrl:NavController,
    private dataservice:FirstService,
    private toastCtrl:ToastController,
    private api:ApiService,
    private util:UtilService
  ) { }

  ngOnInit() {
    this.input = this.dataservice.input2();
  }

  gotab(){
    this.navCtrl.navigateForward('tabs/tab1');
  }

  goNext(){
    let tData:any;
    this.util.translate.get("errs").subscribe((d)=>{
      tData = d;
    })
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("email",this.email);
    fd.append("first_name",this.firstname);
    fd.append("last_name",this.lastname);
    fd.append("password",this.password);
    fd.append("phone",this.phone)
    this.api.postDataWithToken("register",fd).subscribe((success:any) => {
      if(success.success){
        this.util.dismissLoading();
        this.api.profileUpdate.next(true);
        this.navCtrl.navigateForward("followpage");
        localStorage.setItem("token",success.data.token);
      }else{
        this.util.dismissLoading();
      }
    }, err => {  
      if(err.status == 422){
        this.err = err.error.errors;   
        if(this.err.first_name == "The first name field is required."){
          this.err.first_name = tData.first_name
        }
        if(this.err.last_name =="The last name field is required."){
          this.err.last_name = tData.last_name;
        }
        if(this.err.password == "The password field is required."){
          this.err.password = tData.password;
        }
        if(this.err.phone == "The phone field is required."){
          this.err.phone = tData.phone;
        }
        if(this.err.email == "The email field is required."){
          this.err.email = tData.email;
        }
        if(this.err.email == "The email must be a valid email address."){
          this.err.email = tData.emailEr;
        }
        if(this.err.password == "The password must be at least 6 characters."){
          this.err.password = tData.passwordEr;
        }
      }
      this.util.dismissLoading();
    })
  }

  input:any = [];

}
