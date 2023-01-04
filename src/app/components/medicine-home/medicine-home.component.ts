import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pincode !: string;
  ispincodeAvailable: boolean = false;
  pincodeDetails:any;
  
  
  @ViewChild('closeBtn',{read:ElementRef}) closeBtn !:ElementRef
  
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }

  getPackageDetailsByPincode() {
    if (this.pincode && this.pincode.length == 6) {

      const httpParams: HttpParams = new HttpParams()
        .set('pincode', this.pincode)
      this.httpService.getDetailsFromServer('pinCodeDetails', httpParams).subscribe((_response: any) => {
        if (_response && _response.length > 0) {
          this.ispincodeAvailable = true;
          this.pincodeDetails = _response[0];
          if(this.closeBtn){
            this.closeBtn.nativeElement.click()
          }

        } else {
          this.ispincodeAvailable = false;
        }

      },
        error => {
          console.log(error)
        }
      )

    }



  }

}
