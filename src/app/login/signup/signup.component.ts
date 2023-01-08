import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isGetOtp: boolean = false;
  isVerifyOtp: boolean = false;
  otpGenerated !: number
  otpTimer !: number
  sub !: Subscription
  isSignUpSuccess : boolean = false;

  signUpForm !: FormGroup

  constructor(private fb: FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.createSignUpForm()
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      'userName': ['', [Validators.required]],
      'MobileNo': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      'password': ['', [Validators.required]],
      'isMobileNoVerified': [false, []]
    })
  }

  signUp() {
    if(this.isVerifyOtp){
    console.log(this.signUpForm.value)

    // now after signup send the details to server(database) 
     this.http.postDetailsToServer('users',this.signUpForm.value).subscribe((response:any)=>{
      if(response  ){
        this.isSignUpSuccess = true;
        console.log(response)
      } else {
        this.isSignUpSuccess = false
      }
     })
    }

  }

  getOtp() {
    this.isGetOtp = true;
    // generated 4 digit random otp
    this.otpGenerated = Math.floor(Math.random() * 9000 + 1000);
    console.log(this.otpGenerated);
    // 
    var emittedNo = interval(1000)
    this.sub = emittedNo.subscribe((res: any) => {
      this.otpTimer = 60 - res;
      if (this.otpTimer == 0) {
        this.sub.unsubscribe()
      }
    })
  }

  varifyOtp(otpEntered:any) {
    if(otpEntered == this.otpGenerated){
      this.isVerifyOtp = true ;
      this.sub.unsubscribe()
      this.isGetOtp = false;

      // if otp is verified send mobile no to backend 
      this.signUpForm.controls['isMobileNoVerified'].setValue(true)

    }
   
  }
}
