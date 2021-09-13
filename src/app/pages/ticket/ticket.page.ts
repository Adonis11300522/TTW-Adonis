import { templateJitUrl, ThrowStmt } from '@angular/compiler';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { EventPage } from 'src/app/modals/event/event.page';
import { SocialSharingPage } from 'src/app/modals/social-sharing/social-sharing.page';
import { TranslateService } from '@ngx-translate/core';
declare var ol:any;
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
  map: any;
  iconFeature2;
  latitude: number ;
  longitude: number;
  public iconUrl:any = "../../../assets/loc.svg"
  item: any;
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  tdata: any;
  lan: string;
  constructor(
    private navCtrl:NavController,
    private dataservice:FirstService,
    private api:ApiService,
    private util:UtilService,
    private modalController:ModalController,
    private translate:TranslateService
  ) {
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324,
          img:"https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
        },
        {
          id: 321,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICHgDuW1OZSSCrJg5UhA93eW3RNiqWIn_dg&usqp=CAU"
        },
        {
          id: 435,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu0Ma2lCstL0tCe1E5EFsAwcV5WKB3kNeTA&usqp=CAU"
        },
        {
          id: 524,
          img:"https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
        },
        {
          id: 235,
          img:"https://cdn.vox-cdn.com/thumbor/Z59lXE3fz-TZOgtsaaU2uhRikzo=/0x0:1346x854/1200x800/filters:focal(566x320:780x534)/cdn.vox-cdn.com/uploads/chorus_image/image/67669048/Screen_Shot_2020_10_21_at_5.44.23_PM.0.png"
        }
      ]
    };
   }  
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  state: any = 1;
  slideOptsTwo = {
    
    spaceBetween: 20
  };
address:any='';
  logScrolling(ev) {
    if (ev.detail.scrollTop >= 150) {
      this.state = 2;
    } else {
      this.state = 1;
    }
  }
  ngOnInit() {
    this.api.profileUpdate.subscribe((d)=>{
      this.lan = localStorage.getItem("lan");
    })
    this.getData();

    this.translate.get("ticketToast").subscribe((d) =>{
      this.tdata = d;
    })
  }
  getData() :void{
    this.cal = this.dataservice.cal();
    this.icon = this.dataservice.icon2();
    this.scroll = this.dataservice.scroll();
    this.util.presentLoading();
   this.api.profileUpdate.subscribe((s)=>{
    this.api.getDataWithToken("event-detail/" + localStorage.getItem("id")).subscribe((success:any) => {
      if(success.success){
        this.item = success.data;
        this.api.sharing = this.item;
        localStorage.setItem("first_name",success.data.organization.first_name + ' ' + success.data.organization.last_name);
        this.latitude = JSON.parse(success.data.lat);
        this.longitude = JSON.parse(success.data.lang);
        if(success.data.address !== ''){
          this.address = success.data.address
        }
              
        this.util.dismissLoading();
        this.newMapFunction();
      }
    }, err => {
      this.util.dismissLoading();
    })
   })
  }

  goBack(){
    this.navCtrl.back();
  }

  goList(id){
    this.navCtrl.navigateForward("ticket");
    localStorage.setItem("id",id);
    this.cal = this.dataservice.cal();
    this.icon = this.dataservice.icon2();
    this.scroll = this.dataservice.scroll();
    this.util.presentLoading();
    this.api.getDataWithToken("event-detail/" + localStorage.getItem("id")).subscribe((success:any) => {
      if(success.success){
        this.item = success.data;
        this.api.sharing = this.item;
        this.latitude = JSON.parse(success.data.lat);
        this.longitude = JSON.parse(success.data.lang);
        this.util.dismissLoading();
        this.setMapCenterLocation(this.longitude,this.latitude)
      }
    }, err => {
      this.util.dismissLoading();
    })
  
  }




  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  goTicket(id){
    this.navCtrl.navigateForward('ticketdetails');
    localStorage.setItem("ticketId",id)
  }

  itemSelected(id){
  
  }

  async items(img){
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: img
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });
 
    return await modal.present();
  }

    cal:any = [];
    icon:any = [];
    scroll:any = [];

    setMapCenterLocation(long, lat) {
      var coord = this.getPointFromLongLat(long, lat);
      this.iconFeature2.getGeometry().setCoordinates(coord);
      this.map.getView().setCenter(coord);
      this.map.getView().setZoom(14);
    }
    getPointFromLongLat(long, lat) {
      return ol.proj.transform([long, lat], "EPSG:4326", "EPSG:3857");
    }
    newMapFunction() {
      
      this.iconFeature2 = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([this.longitude, this.latitude])
        ),
        name: "Somewhere else",
      });
      const translate1 = new ol.interaction.Translate({
        features: new ol.Collection([this.iconFeature2]),
      });
      // specific style for that one point
      this.iconFeature2.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src: this.iconUrl,
          }),
        })
      );
  
      const iconLayerSource = new ol.source.Vector({
        features: [this.iconFeature2],
      });
  
      const iconLayer = new ol.layer.Vector({
        source: iconLayerSource,
        // style for all elements on a layer
        style: new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src:
              "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
          }),
        }),
      });
  
      this.map = new ol.Map({
        target: "mapssss",
  
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
          iconLayer,
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([this.longitude, this.latitude]),
          zoom: 8,
        }),
      });
  
      this.map.addInteraction(translate1);
      translate1.on("translateend", (evt) => {
        var coords = ol.proj.toLonLat(evt.coordinate);
        this.latitude = coords[1];
        this.longitude = coords[0];
      });
  
      setTimeout(() => {
        this.map.updateSize();
      }, 500);
    }
    readMore(item){
      this.navCtrl.navigateForward("readmore");
      localStorage.setItem("readMore",item)
    }
    event(e){
      
      let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
      if(token == ""){
        this.util.presentToast(this.tdata.notLogin);
      }else{
        this.api.postDataWithToken("add-following-list",{user_id:e}).subscribe((success:any) => {
          if(success.success){
            this.util.presentLoading();
    this.api.getDataWithToken("event-detail/" + localStorage.getItem("id")).subscribe((success:any) => {
      if(success.success){
        this.item = success.data;
        this.api.sharing = this.item;
      
        this.util.dismissLoading();
      
      }
    }, err => {
      this.util.dismissLoading();
    })
          }
        },err => {
        
        })
      }
    }
    helo(){
        this.util.presentToast(this.tdata.already)
    }

    event2(){
      let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
      if(token == ""){
        this.util.presentToast(this.tdata.notLogin);
      }else{
        this.api.postDataWithToken("add-favorite",{event_id:this.item.id}).subscribe((success:any) => {
          if(success.success){
            this.api.profileUpdate.next(true);
          }
        },err => {
         
        })
      }
    }


    like(id){
      let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
      if(token == ""){
        this.util.presentToast(this.tdata.notLogin);
      }else{
        this.util.presentLoading();
        this.api.postDataWithToken("add-favorite",{event_id:id}).subscribe((success:any) => {
          if(success.success){
            this.getData();
            this.util.dismissLoading();
          }
        },err => {
         
          this.util.dismissLoading();
        })
      }
    }
  

    async eventOrga(){
      localStorage.setItem("emailOrganize",this.item.organization.email)
      const modal = await this.modalController.create({
        component:EventPage,
        cssClass:"modall-stylee"
      });
      localStorage.setItem("report_id",this.item.id)
      return await modal.present();
    }



}
