import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventPageModule } from './modals/event/event.module';
import { DonemodalPageModule } from './modals/donemodal/donemodal.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { CouponPageModule } from './pages/coupon/coupon.module';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SigninPageModule } from './pages/signin/signin.module';
import { Locate1PageModule } from './pages/locate1/locate1.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { SocialSharingPageModule } from './modals/social-sharing/social-sharing.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SingleDetailsPageModule } from './pages/single-details/single-details.module';
import { AddReviewPageModule } from './pages/add-review/add-review.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, EventPageModule, DonemodalPageModule, HttpClientModule, CouponPageModule, SigninPageModule, Locate1PageModule, SocialSharingPageModule, SingleDetailsPageModule, AddReviewPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    OneSignal,
    InAppBrowser,
    NgxPayPalModule,
    Stripe,
    Camera,
    SocialSharing,
    NgxQRCodeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
