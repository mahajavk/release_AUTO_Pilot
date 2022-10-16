import { Component, OnInit } from '@angular/core';
import CustomerData from 'Customers.json'
import { PipeTransform } from "@angular/core";

interface Customer{
 id: number;
 name: string;
 email: string;
 gender:string;
}



@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})

export class DisplayCustomerComponent implements OnInit {

   //searchTerm:"vikas"
   searchText='';

  transform(customers: Customer[],searchTerm: string) {
        customers.forEach(element => {
          element.name="b"
        });

  }
  constructor() { }

  ngOnInit(): void {

    // this.customers = this.customers.filter(
    //   book => book.name === this.search);
      
  }
  
    customers: Customer[] = CustomerData

   
}
