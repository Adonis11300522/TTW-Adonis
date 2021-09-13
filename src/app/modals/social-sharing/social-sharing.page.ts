import { Component, Input, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage implements OnInit {
  email: any;
  public image: string = '';
  url: string = "https://www.google.com/";
  public dataShare: string = '';
  constructor(private socialSharing: SocialSharing, private api: ApiService, private util: UtilService) {

  }
  ngOnInit() {
    console.log(this.api.sharing);
    this.image = this.api.sharing.imagePath + this.api.sharing.image;
    this.dataShare = this.api.sharing.name;
  }

  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.dataShare, this.image, this.url).then((res) => {
      this.util.modal.dismiss();
    }).catch((e) => {
      alert(e);
    })
  }

  shareEmail() {
    this.socialSharing.shareViaEmail(this.dataShare, this.api.sharing.description, this.email).then((res) => {
      this.util.modal.dismiss();
    }).catch((E) => {
      alert(E);
    })
  }

  shareFacebook() {
    this.socialSharing.shareViaFacebook(this.dataShare,this.image,null).then((res) => {
      this.util.modal.dismiss();
      console.log("res", res);
    }).catch((e) => {
      alert(e)
      console.log("e", e);

    });
  }

  shareViaInsta() {
    this.socialSharing.shareViaInstagram(this.dataShare, this.image).then((res) => {
      this.util.modal.dismiss();
      console.log("res", res);
    }).catch((e) => {
      alert(e)
    });
  }

  shareSkype() {
    this.socialSharing.shareViaTwitter(this.dataShare, this.image).then((res) => {
      this.util.modal.dismiss();
    }).catch((e) => {
      console.log(e);
      alert(e);
    })
  }

}
