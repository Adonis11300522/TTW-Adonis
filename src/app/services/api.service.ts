import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: any = "https://eticketgn.com/public/api/user/";
  public profileUpdate = new BehaviorSubject(true);
  public deviceToken: any;
  catId: any;
  lat: any;
  lang: any;
  dataPass: any = [];
  address: any = '';
  coupon: any;
  discount: any = 0; coupon_id: any;
  sharing: any;
  isFrom: any;
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }

  getDataWithToken(url) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('token'));
    header = header.set("Accept", "application/json");
    return this.http.get(this.baseUrl + url, { headers: header });
  }


  postDataWithToken(url, data) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('token'));
    header = header.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
}
