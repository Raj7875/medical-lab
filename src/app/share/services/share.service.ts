import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  emitSelectedProduct:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartObs = this.emitSelectedProduct.asObservable();

}
