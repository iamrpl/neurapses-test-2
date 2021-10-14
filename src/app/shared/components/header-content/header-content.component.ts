import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  value:any = 'basic';
  rangeValue: any = '30';
  checkToggleValue: any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    // current router value to set radio check button
    if (this.router.url.includes('make')) {
      this.checkToggleValue = 'pay';
    } else if(this.router.url.includes('app-login')){
      this.checkToggleValue = 'app';
    } else {
      this.checkToggleValue = 'basic';
    }
  }

  // get checked values to navigate page
  getToggleValues = (getValue : any) => {
    try {
      if (getValue.includes('basic')) {
        this.router.navigateByUrl('');
        this.rangeValue = '30';
      } else if(getValue.includes('pay')) {
        this.router.navigateByUrl('make-payment');
        this.rangeValue = '50';
      } else if (getValue.includes('create')) {
        this.router.navigateByUrl('app-login');
        this.rangeValue = '100';
      }
    } catch (error) {
      console.log(error)
    }
  }
}
