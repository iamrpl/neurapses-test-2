import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  basicInfoForm = new FormGroup({
    name: new FormControl(''),
    companyname: new FormControl(''),
    role: new FormControl(''),
    cellphone: new FormControl(''),
    email: new FormControl(''),
    addressone: new FormControl(''),
    addresstwo: new FormControl(''),
    country: new FormControl(''),
    postalcode: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    dob: new FormControl(''),
    dateofhire: new FormControl(''),
    licenseno: new FormControl(''),
    licenseexpiry: new FormControl(''),
    lastmedical: new FormControl(''),
    nextmedical: new FormControl(''),
    passportexpiry: new FormControl(''),
    fastcardexpiry: new FormControl(''),
    hamzatexpiry: new FormControl(''),
    terminationdate: new FormControl(''),
    status: new FormControl(''),
    tankerandorsment: new FormControl(''),
    twicno: new FormControl(''),
  });
  
  constructor( private router : Router ) { 
   
  }

  ngOnInit(): void {

  }

  addDriver = () => {
    try {
      this.router.navigateByUrl('make-payment');
    } catch (error) {
      console.log(error)
    }
  }

}
