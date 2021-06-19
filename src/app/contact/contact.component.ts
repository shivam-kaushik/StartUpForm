import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  text = new FormControl('', [Validators.required]);

  states: Select[] = [
    {
      value: 'delhi',
      viewValue: 'Delhi'
    },
    {
      value: 'maharashtra',
      viewValue: 'Maharashtra'
    },
    {
      value: 'punjab',
      viewValue: 'Punjab'
    },
    {
      value: 'uttarakhand',
      viewValue: 'Uttarakhand'
    },
    {
      value: 'karnataka',
      viewValue: 'Karnataka'
    },
    {
      value: 'assam',
      viewValue: 'Assam'
    },
    {
      value: 'uttar pradesh',
      viewValue: 'Uttar Pradesh'
    }
  ]
  cities: Select[] = [
    {
      value: 'new delhi',
      viewValue: 'New Delhi'
    },
    {
      value: 'mumbai',
      viewValue: 'Mumbai'
    },
    {
      value: 'chandigarh',
      viewValue: 'Chandigarh'
    },
    {
      value: 'shimla',
      viewValue: 'Shimla'
    },
    {
      value: 'bengaluru',
      viewValue: 'Bengaluru'
    },
    {
      value: 'dispur',
      viewValue: 'Dispur'
    },
    {
      value: 'lucknow',
      viewValue: 'Lucknow'
    }
  ]
  
  url = '';
  selectedValue: string | undefined;
  myText: any | undefined;
  onSelectfile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
