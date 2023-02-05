import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = 'http://127.0.0.1:8000/api/'

  constructor( private http :HttpClient) { }

 public permission:any

  public login (data:any){
    return this.http.post(this.baseurl+'login',data)
  }
  public signnup (data:any){
    return this.http.post(this.baseurl+'signup',data)
  }

 


 public CreateToken(token:string|any){
    localStorage.setItem('authToken' , token );
  }

  public isloggedin(){
    if(localStorage.getItem('authToken') ){
      return true
    }else{
      this.permission='guest'
      return false
    }
  }

  public logout(){
    localStorage.removeItem('authToken');
   return this.isloggedin()
  }

  
}
