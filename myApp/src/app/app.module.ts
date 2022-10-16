import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DisplayCustomerComponent } from './display-customer/display-customer.component';
import { HomeComponent } from './home/home.component';
import { VehicleCustomersComponent } from './vehicle-customers/vehicle-customers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddVehiclesComponent,
    AddCustomerComponent,
    DisplayCustomerComponent,
    HomeComponent,
    VehicleCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
