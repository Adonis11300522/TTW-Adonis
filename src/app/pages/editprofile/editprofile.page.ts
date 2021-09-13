import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  item: any = [];
  data: any;
  image: string;
  imagePreview: any;
  name: any;
  last_name: any;
  isImgChange: boolean;
  lan: any = '';
  phone:any;
  constructor(
    private navCtrl: NavController,
    private dataService: FirstService,
    private api: ApiService,
    private util: UtilService,
    private sheetCtrl: ActionSheetController,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.lan = localStorage.getItem("lan");
    this.item = this.dataService.item();
    this.util.presentLoading();
    this.api.getDataWithToken("profile").subscribe((success: any) => {
      if (success.success) {
        this.data = success.data;
        this.image = success.data.imagePath + success.data.image
        this.util.dismissLoading();
      }
    }, err => {
      
      this.util.dismissLoading();
    })


    this.api.profileUpdate.subscribe((d) => {
      if (d) {
        this.api.getDataWithToken("profile").subscribe((success: any) => {
          if (success.success) {
            this.data = success.data;
            this.image = success.data.imagePath + success.data.image
            this.util.dismissLoading();
          }
        }, err => {
          
          this.util.dismissLoading();
        })
      }
    })
  }

  edit() {
    let tData: any;
    this.util.translate.get("tick2").subscribe((d) => {
      tData = d;
    })
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("name", this.name);
    fd.append("last_name", this.last_name);
    this.api.postDataWithToken("edit-profile", fd).subscribe((success: any) => {
      if (success.success) {
        this.util.dismissLoading();
        this.util.presentToast(tData.profile);
        this.api.profileUpdate.next(true);
        this.navCtrl.navigateForward("tabs/tab5")
      }
    }, err => {
      
      this.util.dismissLoading();
    })
  }

  goBack() {
    this.navCtrl.back();
  }

  goNext() {
    this.navCtrl.navigateBack('profile');
  }


  async albumSheet() {
    const actionSheet = await this.sheetCtrl.create({
      header: 'Albums',
      mode: 'ios',
      cssClass: 'image-picker',
      buttons: [{
        text: 'Gallery',
        icon: 'images-sharp',
        handler: () => {
          this.getGallery();
        }
      }, {
        text: 'Camera',
        icon: 'camera-sharp',
        handler: () => {
          this.getCamera();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }


  public getCamera(): any {
    let tData: any;
    this.util.translate.get("tick2").subscribe((d) => {
      tData = d;
    })
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri
      this.isImgChange = true;
      let data = {
        image: this.imagePreview
      }
      this.api.postDataWithToken('change-profile-image', data).subscribe((success: any) => {
        if (success.success) {
          this.util.presentToast(tData.im);
          this.api.profileUpdate.next(true);

        }
      }, (err: any) => {

      })
    });
  }

  public getGallery(): any {
    let tData: any;
    this.util.translate.get("tick2").subscribe((d) => {
      tData = d;
    })
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.isImgChange = true;
      this.imagePreview = file_uri
      let data = {
        image: this.imagePreview
      }
      this.api.postDataWithToken('change-profile-image', data).subscribe((success: any) => {
        if (success.success) {
          this.util.presentToast(tData.im);
          this.api.profileUpdate.next(true);
        }
      }, (err: any) => {

      })
    });
  }

}
