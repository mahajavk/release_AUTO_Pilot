import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AddVehiclesComponent } from './add-vehicles/add-vehicles.component'
import {AddCustomerComponent} from './add-customer/add-customer.component'
import {DisplayCustomerComponent} from './display-customer/display-customer.component'
import{VehicleCustomersComponent} from './vehicle-customers/vehicle-customers.component'
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:AddVehiclesComponent,
    path:"addVehicle"
  },
{
  component:AddCustomerComponent,
  path:"addCustomer"
},
{
  component:DisplayCustomerComponent,
  path:"displayCustomer"
},
{
  component:DisplayCustomerComponent,
  path:"displayCustomer"
},
{
  component:VehicleCustomersComponent,
  path:"sale"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
