import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }
user:boolean = false
  ngOnInit(): void {
    if(this.auth.isloggedin()){
      this.user=true
    }
  }
  logout(){
    this.auth.logout()
  }

}
