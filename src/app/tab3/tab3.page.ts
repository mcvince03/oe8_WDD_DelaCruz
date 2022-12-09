import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peso:any;
  dollar: any;
  result:any;
  result1:any;
  
    constructor() {}
  
    convert(){
      this.peso = 55.58;
      this.result = this.dollar * parseFloat(this.peso);
      this.result1 =this.result.toFixed(2);
      console.log('Final Value' + this.result);
    }
  }