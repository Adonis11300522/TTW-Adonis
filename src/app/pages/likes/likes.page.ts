import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
}) 
export class LikesPage implements OnInit {
  likes: any = [];
  data: any;
  lan: any;
  constructor(
    private dataService: FirstService,
    private util: UtilService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.profileUpdate.subscribe((d) => {
      this.lan = localStorage.getItem("lan");
    })
  }
  async ionViewWillEnter() {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token == "") {
      localStorage.setItem("previous-request", "true");
      localStorage.setItem("previous-request-page", "tabs/tab4");
      let modal = await this.util.modal.create({
        component: SigninPage,
      });
     
      localStorage.setItem("isFrom", "other");
      modal.onDidDismiss().then((res) => {
        localStorage.removeItem("isFrom");
        this.api.profileUpdate.subscribe((s) => {
          if (s) {
            this.api.getDataWithToken("user-likes").subscribe((success: any) => {
              if (success.success) {
                this.data = success.data;
              }
            }, err => {
             
            })
          }
        })
      })
      return await modal.present();
    } else {
      this.api.profileUpdate.subscribe((s) => {
        if (s) {
          this.likes = this.dataService.likes();

          this.api.getDataWithToken("user-likes").subscribe((success: any) => {
            if (success.success) {
              this.data = success.data;

            }
          }, err => {
            
          })
        }
      })
    }
  }

}
