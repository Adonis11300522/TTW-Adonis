import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "pickcity",
    loadChildren: () =>
      import("./pages/pickcity/pickcity.module").then(
        (m) => m.PickcityPageModule
      ),
  },
  {
    path: "locate1",
    loadChildren: () =>
      import("./pages/locate1/locate1.module").then((m) => m.Locate1PageModule),
  },

  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },

  {
    path: "followpage",
    loadChildren: () =>
      import("./pages/followpage/followpage.module").then(
        (m) => m.FollowpagePageModule
      ),
  },
  {
    path: "tab1",
    loadChildren: () =>
      import("./pages/tab1/tab1.module").then((m) => m.Tab1PageModule),
  },
  {
    path: "ticket",
    loadChildren: () =>
      import("./pages/ticket/ticket.module").then((m) => m.TicketPageModule),
  },
  {
    path: "ticketdetails",
    loadChildren: () =>
      import("./pages/ticketdetails/ticketdetails.module").then(
        (m) => m.TicketdetailsPageModule
      ),
  },

  {
    path: "reportevent2",
    loadChildren: () =>
      import("./pages/reportevent2/reportevent2.module").then(
        (m) => m.Reportevent2PageModule
      ),
  },

  {
    path: "readmore",
    loadChildren: () =>
      import("./pages/readmore/readmore.module").then(
        (m) => m.ReadmorePageModule
      ),
  },
  {
    path: "ticketdetails2",
    loadChildren: () =>
      import("./pages/ticketdetails2/ticketdetails2.module").then(
        (m) => m.Ticketdetails2PageModule
      ),
  },

  {
    path: "searchtab",
    loadChildren: () =>
      import("./pages/searchtab/searchtab.module").then(
        (m) => m.SearchtabPageModule
      ),
  },
  {
    path: "goout",
    loadChildren: () =>
      import("./pages/goout/goout.module").then((m) => m.GooutPageModule),
  },
  {
    path: "moodfor",
    loadChildren: () =>
      import("./pages/moodfor/moodfor.module").then((m) => m.MoodforPageModule),
  },

  {
    path: "searchresult",
    loadChildren: () =>
      import("./pages/searchresult/searchresult.module").then(
        (m) => m.SearchresultPageModule
      ),
  },

  {
    path: "tickets",
    loadChildren: () =>
      import("./pages/tickets/tickets.module").then((m) => m.TicketsPageModule),
  },
  {
    path: "likes",
    loadChildren: () =>
      import("./pages/likes/likes.module").then((m) => m.LikesPageModule),
  },
  {
    path: "singlepage",
    loadChildren: () =>
      import("./pages/singlepage/singlepage.module").then(
        (m) => m.SinglepagePageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "editprofile",
    loadChildren: () =>
      import("./pages/editprofile/editprofile.module").then(
        (m) => m.EditprofilePageModule
      ),
  },
  {
    path: "findfollowing",
    loadChildren: () =>
      import("./pages/findfollowing/findfollowing.module").then(
        (m) => m.FindfollowingPageModule
      ),
  },
  {
    path: "notificationcentre",
    loadChildren: () =>
      import("./pages/notificationcentre/notificationcentre.module").then(
        (m) => m.NotificationcentrePageModule
      ),
  },

  {
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "coupon",
    loadChildren: () =>
      import("./pages/coupon/coupon.module").then((m) => m.CouponPageModule),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./pages/payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "social-sharing",
    loadChildren: () =>
      import("./modals/social-sharing/social-sharing.module").then(
        (m) => m.SocialSharingPageModule
      ),
  },
  {
    path: "single-details",
    loadChildren: () =>
      import("./pages/single-details/single-details.module").then(
        (m) => m.SingleDetailsPageModule
      ),
  },
  {
    path: "add-review",
    loadChildren: () =>
      import("./pages/add-review/add-review.module").then(
        (m) => m.AddReviewPageModule
      ),
  },
  {
    path: 'ticketqrcode',
    loadChildren: () => import('./pages/ticketqrcode/ticketqrcode.module').then(m => m.TicketqrcodePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
