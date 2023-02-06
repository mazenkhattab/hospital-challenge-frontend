import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private auth:AuthService) { }

  ngOnInit(): void {
  }
signupform= new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
})

signup(){
  this.auth.signnup(this.signupform.value)
}
}
