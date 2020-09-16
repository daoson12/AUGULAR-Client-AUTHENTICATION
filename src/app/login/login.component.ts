import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  // submitted=false
 
  constructor(private service:AuthService,private formBuder:FormBuilder, private _router:Router) { }

  ngOnInit(){
    this.loginFormGroup=this.formBuder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],	
      id:	[],
  
    })
  }

  loginRegisteredUser(){
    this.service.loginUser(this.loginFormGroup.value).subscribe(result=>{

      console.log(result)
      localStorage.setItem('token', result.token)
      this._router.navigate(['/special'])
    })

  }
}
