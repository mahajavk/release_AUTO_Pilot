import { Component } from '@angular/core';  
import { FormGroup, FormControl, FormArray, FormBuilder,ReactiveFormsModule } from '@angular/forms'  
import CustomerData from 'Customers.json'
import VehiclesData from 'Vehicles.json'

interface Vehicle{
  id:number;
  name:string;
  Type:string;
}
interface Customer{
  id: number;
  name: string;
  email: string;
  gender:string;
 }

@Component({
  selector: 'app-vehicle-customers',
  templateUrl: './vehicle-customers.component.html',
  styleUrls: ['./vehicle-customers.component.css']
})


export class VehicleCustomersComponent {
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  
  customers: Customer[] = CustomerData
  vehicles: Vehicle[] = VehiclesData
}
