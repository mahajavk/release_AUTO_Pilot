import { Component, OnInit } from '@angular/core';
import VehiclesData from 'Vehicles.json'

interface Vehicle{
  id:number;
  name:string;
  Type:string;
}

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  vehicles: Vehicle[] = VehiclesData
}
