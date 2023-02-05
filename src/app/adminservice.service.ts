import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  baseurl = 'http://127.0.0.1:8000/api/'

  public GetBookings(speciality_id ?:any,date ?:Date){
    if(speciality_id !=null && date !=null){
      return this.http.get(this.baseurl+'bookings/'+speciality_id+'/'+date)

    }
     if(speciality_id){
      return this.http.get(this.baseurl+'bookings/'+speciality_id)

    }
    else{
      return this.http.get(this.baseurl+'bookings')

    }
  }
}
