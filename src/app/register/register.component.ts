import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regFormGroup: FormGroup;
 
 constructor(private service:AuthService,private formBuder:FormBuilder, private _router:Router) { }

  ngOnInit() {
    this.regFormGroup=this.formBuder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],	
      id:	[],
  
    })
  }
  saveRegisteredUser():any{
    this.service.registerUser(this.regFormGroup.value).subscribe(result=>{
         
      console.log(result)
      localStorage.setItem('token', result.token)
      this._router.navigate(['/special'])
    },
    err=>console.log(err)
    )


  }



}
