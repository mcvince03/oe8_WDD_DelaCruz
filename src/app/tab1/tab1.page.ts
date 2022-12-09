import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso:any;
  dollar: any;
  result:any;
  result1:any;

  constructor() {}
  convert(){
    this.dollar = 0.018019;
    this.result = this.peso * parseFloat(this.dollar);
    this.result1 =this.result.toFixed(2);
    console.log('Final Value' + this.result);
  }
}
