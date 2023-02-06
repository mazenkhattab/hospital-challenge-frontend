import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    
  }
  loginform = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  });

  login() {
    console.log(this.loginform.value);
    
    this.auth.login(this.loginform.value).subscribe({
      next:(next:any)=>{
        console.log(next);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
