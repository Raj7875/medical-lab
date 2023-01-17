import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ShareService } from 'src/app/share/services/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actionName : string = 'SignIn';
  loggedUserDetails:any
  isLoginSuccess:boolean = false;
  cardCount!:Observable<number>;
  sub!:Subscription


  @ViewChild('closeBtn',{'read':ElementRef}) closeBtn !: ElementRef ;
  @ViewChild('loginBtn',{'read':ElementRef}) loginBtn!:ElementRef;

  


  constructor(private auth:AuthenticationService,private shareService:ShareService,private router:Router , private store:Store<any>) {
    this.cardCount = this.store.select('cartCount')
   }

  ngOnInit(): void {
    this.loggedUserDetails = this.auth.getUser();
   
    // this.cardCount = this.shareService.cartObs;
    
  }

  changeAction(Action:string){
    this.actionName= Action

  }
  handleLoginSuccess(flag:boolean){
    if(flag){
      this.isLoginSuccess = true ;
      this.loggedUserDetails = this.auth.getUser();
      this.closeBtn.nativeElement.click();
    }
  }

  redirectToCart(){
    if(this.isLoginSuccess){
         this.router.navigate(['/cart'])
    }else {
      this.loginBtn.nativeElement.click()
    }
  }
 

}
