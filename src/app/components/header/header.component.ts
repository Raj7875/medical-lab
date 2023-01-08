import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actionName : string = 'SignIn'

  @ViewChild('closeBtn',{'read':ElementRef}) closeBtn !: ElementRef ;
  @ViewChild('loginBtn',{'read':ElementRef}) loginBtn!:ElementRef;

  loggedUserDetails:any
  isLoginSuccess:boolean = false;

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.loggedUserDetails = this.auth.getUser()
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
 

}
