import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  email:any = 'test@test.com';
  constructor(
    private toastCtrl:ToastController
  ) { }

  tabs(){
    return[
      {
        tabName:'tab1',
        iconName:'home-sharp'
      },
      {
        tabName:'tab2',
        iconName:'search-sharp'
      },
      {
        tabName:'tab3',
        iconUrl:"../../../assets/coupon.svg"
      },
      {
        tabName:'tab4',
        iconName:'heart-sharp'
      },
      {
        tabName:'tab5',
        iconName:'person-sharp'
      }
    ]
  }

  cal(){
    return[
      {
        icon:'far fa-calendar',
        icon2:'',
        date:'Fri, 01 May - Sat, 02 May 2020',
        filter:'9:00 AM - 3:00 Pm GMT-7',
        filter2:'',
        span:'Add to calendar',
      },
      {
        icon:'',
        icon2:'location-outline',
        date:'SNV West',
        filter:'658 Market Street, Level 2, Bespoke Events',
        filter2:'San Francisco, CA 63595',
        span:'',
      }
    ]
  }

  icon(){
    return[
      {
        class:'top-left',
        icon:'chevron-back',
        click:'goBack()'
      },
      {
        class:'top-right',
        icon:'heart',
        click:''
      },
      {
        class:'top-right2',
        icon:'ellipsis-vertical',
        click:''
      }
    ]
  }

  scroll(){
    return[
      {
        img:'../../../assets/170626132817-pride-parade-exlarge-169.png',
        img1:'../../../assets/Group 4786.png',
        img2:'../../../assets/Group 4787.png',
        text1:'APR',
        text2:'09',
        text3:'Pride at The Disco',
        text4:'Westfield San Francisco Centre',
      },
      {
        img:'../../../assets/180525_vod_orig_gaypride_hpMain_16x9_992.png',
        img1:'../../../assets/Group 4786.png',
        img2:'../../../assets/Group 4787.png',
        text1:'APR',
        text2:'09',
        text3:'Pride at The Disco',
        text4:'Westfield San Francisco Centre',
      },{
        img:'../../../assets/170626132817-pride-parade-exlarge-169.png',
        img1:'../../../assets/Group 4786.png',
        img2:'../../../assets/Group 4787.png',
        text1:'APR',
        text2:'09',
        text3:'Pride at The Disco',
        text4:'Westfield San Francisco Centre',
      },
      {
        img:'../../../assets/180525_vod_orig_gaypride_hpMain_16x9_992.png',
        img1:'../../../assets/Group 4786.png',
        img2:'../../../assets/Group 4787.png',
        text1:'APR',
        text2:'09',
        text3:'Pride at The Disco',
        text4:'Westfield San Francisco Centre',
      }
    ]
  }


  item(){
    return[
      {
        lines:'full',
        text:'Help Centre',
        icon:'chevron-forward',
      },
      {
        lines:'none',
        text:'Suggest Improvements',
        icon:'chevron-forward',
      }
    ]
  }

  following(){
    return[
      {
        img:'../../../assets/Group 4847.png',
        text1:'Chocolate and',
        text2:'Art, Inc',
        btn:'Following'
      },
      {
        img:'../../../assets/images (11).png',
        text1:'1015 Folsom',
        text2:'',
        btn:'Following'
      },
      {
        img:'../../../assets/maxresdefault (2).png',
        text1:'Trix Magazine',
        text2:'',
        btn:'Following'
      }
    ]
  }

  follow(){
    return[
      {
        img:'../../../assets/Group 4847.png',
        text1:'Chocolate and',
        text2:'Art, Inc',
        class1:'btn1',
        btnname:'Following',
      },
      {
        img:'../../../assets/Group 4850.png',
        text1:'BTC, Inc',
        text2:'',
        class1:'btn',
        btnname:'Follow',
      },
      {
        img:'../../../assets/Group 4851.png',
        text1:'Ope!',
        text2:'Productions',
        class1:'btn',
        btnname:'Follow',
      },
      {
        img:'../../../assets/Group 4853.png',
        text1:'1015 Folsom',
        text2:'',
        class1:'btn1',
        btnname:'Following',
      },
      {
        img:'../../../assets/Group 4854.png',
        text1:'MacEcoy Foundation ',
        text2:'for the Arts',
        class1:'btn',
        btnname:'Follow',
      },
      {
        img:'../../../assets/Group 4855.png',
        text1:'Trix Magazine',
        text2:'',
        class1:'btn1',
        btnname:'Following',
      },
    ]
  }

  likes(){
    return[
      {
        img:'../../../assets/vogue-mobile-desktop-lightroom-presets-full-.png',
        text1:'Highly Creative Vogue Style',
        text2:'Fashion Photography Wor..',
        date:'10 Apr - 31 December',
        am:'05:00pm',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Afterglow 2019: Pink Saturday',
        text2:'Black light Discotheque ',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Space 556',
      },
      {
        img:'../../../assets/download (7).png',
        text1:'San Francisco Pride 19',
        text2:'Grndstand Seating',
        date:'30 Apr',
        am:'09:00pm GMT-7+61More',
        text3:'United Nations Plaza',
      }
    ]
  }

  btn(){
    return[
      {
        name:'Music',
      },
      {
        name:'Food & Drink',
      },
      {
        name:'Active',
      },
      {
        name:'Learn',
      },
      {
        name:'Festival',
      },
      {
        name:'Party',
      }
    ]
  }

  likes2(){
    return[
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Love + Propaganda Friday`s',
        text2:'(Series Group)',
        date:'25-26 May',
        am:'10:00pm GMT - 7',
        text3:'Love + Propaganda',
      },
      {
        img:'../../../assets/09322b60-e34f-4479-995e-c6fb068b2475.png',
        text1:'Mighty Real Pride Poolside Party',
        text2:'/ CeCe Peniston (LIVE)',
        date:'30 Apr',
        am:'09:00pm GMT - 7',
        text3:'United Nations Plaza',
      },
      {
        img:'../../../assets/Transform.1200-x-600-1.png',
        text1:'Transform 2019',
        text2:'Accelerating Your Business...',
        date:'10 Apr',
        am:'07:00pm GMT - 7+61 More',
        text3:'The Cosmo Bar and Lou.',
      }
    ]
  }

  likes3(){
    return[
      {
        img:'../../../assets/woman-standing-on-field-2030847.png',
        text1:'Diya Royale - Drag Queen show San Francisco',
        text2:'San Francisco',
        date:'10 Apr',
        am:'7:00pm GMT - 7+61 More',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/adult-audience-band-celebration-625644.png',
        text1:'Pink Block Party / Poolside + ',
        text2:'Herculaes & Love Affair...',
        date:'12 Apr',
        am:'12:00pm GMT - 7',
        text3:'The Great Northern',
      },
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Afterglow 2019; Pink Sarurday',
        text2:'Black light Discotheque',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Space 556',
      },
      {
        img:'../../../assets/download (7).png',
        text1:'San Francisco Pride 19',
        text2:'Grandstand Seating',
        date:'30 Apr',
        am:'9:00pm GMT - 7',
        text3:'United Nations Plaza',
      },
      {
        img:'../../../assets/download (8).png',
        text1:'Sanctuary | The SF Pride',
        text2:'Closing Party',
        date:'10 Apr',
        am:'7:00pm GMT-7+61 More',
        text3:'The Cosmo Bar and Lou.',
      }
    ]
  }

  locate1(){
    return[
      {
        locate1:'San Franscisco',
        locate2:'California, United States',
      },
      {
        locate1:'New York',
        locate2:'New York, United States',
      },
      {
        locate1:'Los Angeles',
        locate2:'California, United States',
      },
      {
        locate1:'London',
        locate2:'City of Westminster, United Kingdom',
      },
      {
        locate1:'Washington',
        locate2:'District of Columbia, United States',
      },
      {
        locate1:'Atlanta',
        locate2:'Georgia, United States',
      },
      {
        locate1:'Chicago',
        locate2:'Illinois, United States',
      },
    ]
  }

  item1(){
    return[
      {
        lines:'full',
        name:'Help Centre',
        icon:'chevron-forward',
      },
      {
        lines:'none',
        name:'Suggest Improvements',
        icon:'chevron-forward',
      }
    ]
  }

  item2(){
    return[
      {
        lines:'full',
        name:'Privacy',
        icon:'chevron-forward',
      },
      {
        lines:'full',
        name:'Terms of Service',
        icon:'chevron-forward',
      },
      {
        lines:'full',
        name:'Cookie Policy',
        icon:'chevron-forward',
      },
      {
        lines:'none',
        name:'Acknowledgements',
        icon:'chevron-forward',
      }
    ]
  }

  heading(){
    return[
      {
        name:'Health & Wellness'
      },
      {
        name:'DIY'
      },
      {
        name:'Cultural'
      },
      {
        name:'Tour'
      },
    ]
  }

  likes4(){
    return[
      {
        img:'../../../assets/caa39607-0333-4ecd-ae36-138b33d4371d.png',
        text1:'Bay - Area Pun - Off: Saturday',
        text2:'Apr 3',
        date:'03 Apr',
        am:'07:00pm GMT - 7',
        text3:'Haight Street Art Center',
      },
      {
        img:'../../../assets/HPn-RssQ.png',
        text1:'Flower Piano at Night',
        text2:'Apr 5',
        date:'05 Apr',
        am:'09:00pm GMT - 7',
        text3:'United Nations Plaza',
      },
      {
        img:'../../../assets/download (8).png',
        text1:'Santuary | The SF Pride',
        text2:'Closing Party',
        date:'10 Apr',
        am:'07:00pm GMT - 7+61 More',
        text3:'The Cosmo Bar and Lou.',
      }
    ]
  }

  ve(){
    return[
      {
        name:'3',
        name2:'Likes',
        div:'vr',
      },
      {
        name:'5',
        name2:'My Tickets',
        div:'vr',
      },
      {
        name:'4',
        name2:'Following',
        div:'',
      }
    ]
  }

  para(){
    return[
      {
        name:'We`re excited to announce our largest conference to date, Bitcoin 2020. Dedicated to incubating and connecting the BTC community, Bitcoin 2020 is our attempt to provide users, developers and the industry an annual expo where we can collaborate, leaand inspire each other.'
      },
      {
      name:'From the biggest miners and most active core devs to fortune 500 companies and darknet markets, Bitcoin 2020 will seek to unite the Bitcoin community for an industry wide event.'
      },
      {
        name:'During the conference well have wide ranging content, plenty of opportunities for networking and both office ial and unofficial parties. This is an opportunity to foc- us on what excites us. It1s time to bring Bitcoin to the forefront of the global conversation,and it`s time to make Bitcoin fun again.'
      },
      {
        name:'For more information about Bitcoin 2020, Speakers,'
      }
    ]
  }

  input(){
    return[
      {
        name:'Email',
        placeholder:'Charleswood@gmail.com',
      },
      {
        name:'Reason',
        placeholder:'Other',
      }
    ]
  }

  search(){
    return[
      
    {
      name:'design thinking'
    },
    {
      name:'design '
    },
    {
      name:'ux design'
    },
    {
      name:'design sprint'
    },
    {
      name:'design workshop'
    },
    {
      name:'design events'
    }
  
    ]
  }

  likes5(){
    return[ 
      {
        img:'../../../assets/66a85880-1969-11e9-931c-272bdd4299c7-rimg-w1200-h930-gmir.png',
        text1:'Habit Summit Behavioural Design',
        text2:'Conference: Video Access',
        date:'10 Apr - 31 December',
        am:'05:00pm',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/0_e5fbiur4IKtJzRTm.png',
        text1:'High School Interactive',
        text2:'Holographic AR Comic Design ',
        date:'12 Apr',
        am:'12:00pm GMT - 7',
        text3:'Presidio Middle School',
      },
      {
        img:'../../../assets/Comic_T_M.png',
        text1:'Teen : Interactive Holographic',
        text2:'AR Comic Design Program at S.',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Presidio Middle School',
      },
      {
        img:'../../../assets/https___cdn.evbuc.com_images_87443191_329591205735_1_original.png',
        text1:'Young Interactive Holographic',
        text2:'AR Game Desig Program at S..',
        date:'15 Apr',
        am:'10:00am GMT - 7',
        text3:'Presidio Middle School',
      },
      {
        img:'../../../assets/download (8).png',
        text1:'Sanctuary | The SF Pride',
        text2:'Closing Party',
        date:'10 Apr',
        am:'7:00pm GMT-7+61 More',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/Comic_T_M.png',
        text1:'Teen : Interactive Holographic',
        text2:'AR Comic Design Program at S.',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Presidio Middle School',
      },
    ]
  }


  input2(){
    return[
      {
        label:'Email',
        placeholder:'Enter your email address'
      },
      {
        label:'First Name',
        placeholder:'Charles'
      },
      {
        label:'Last Name',
        placeholder:'Wood'
      },
      {
        label:'Password',
        placeholder:'**************'
      }
    ]
  }

  likes6(){
    return[ 
      {
        img:'../../../assets/woman-standing-on-field-2030847.png',
        text1:'Diya Royale - Drag Queen show',
        text2:'San Francisco',
        date:'10 Apr',
        am:'7:00pm GMT - 7+61 More',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Afterglow 2019: Pink Saturday',
        text2:'Black light Discotheque ',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Space 556',
      },
      {
        img:'../../../assets/download (7).png',
        text1:'San Francisco Pride 19',
        text2:'Grndstand Seating',
        date:'30 Apr',
        am:'09:00pm GMT-7+61More',
        text3:'United Nations Plaza',
      },
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Afterglow 2019: Pink Saturday',
        text2:'Black light Discotheque ',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Space 556',
      },
      {
        img:'../../../assets/download (7).png',
        text1:'San Francisco Pride 19',
        text2:'Grndstand Seating',
        date:'30 Apr',
        am:'09:00pm GMT-7+61More',
        text3:'United Nations Plaza',
      }
  
    ]
  }

  icon2(){
    return[
      {
        class:'top-right',
        class2:'icon',
        icon:'heart-outline'
      },
      {
        class:'top-right2',
        class2:'icon2',
        icon:'ellipsis-vertical-outline'
      }
    ]
  }

  likes8(){
    return[
      {
        img:'../../../assets/woman-standing-on-field-2030847.png',
        text1:'Diya Royale - Drag Queen show',
        text2:'San Francisco',
        date:'10 Apr',
        am:'7:00pm GMT - 7+61 More',
        text3:'The Cosmo Bar and Lou.',
      },
      {
        img:'../../../assets/adult-audience-band-celebration-625644.png',
        text1:'Pink Block Party / Poolside + ',
        text2:'Herculaes & Love Affair...',
        date:'12 Apr',
        am:'12:00pm GMT - 7',
        text3:'The Great Northern',
      },
      {
        img:'../../../assets/DEpjbXpUAAAysFk.png',
        text1:'Afterglow 2019; Pink Sarurday',
        text2:'Black light Discotheque',
        date:'15 Apr',
        am:'10:00pm GMT - 7',
        text3:'Space 556',
      },
      {
        img:'../../../assets/download (7).png',
        text1:'San Francisco Pride 19',
        text2:'Grandstand Seating',
        date:'30 Apr',
        am:'9:00pm GMT - 7',
        text3:'United Nations Plaza',
      },
      {
        img:'../../../assets/download (8).png',
        text1:'Sanctuary | The SF Pride',
        text2:'Closing Party',
        date:'10 Apr',
        am:'7:00pm GMT-7+61 More',
        text3:'The Cosmo Bar and Lou.',
      }
    ]
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      mode:'md',
      duration: 2000
    });
    toast.present();
  }
}

