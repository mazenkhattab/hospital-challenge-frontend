import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http:HttpClient) { }
  baseurl = 'http://127.0.0.1:8000/api/'
 
 public   getappointment(data:any){
return this.http.get(this.baseurl+'speciality/'+data)
    }

 public   getallspecialities(){
return this.http.get(this.baseurl+'specialities')
 }
    
    

}
