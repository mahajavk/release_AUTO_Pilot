import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCustomersComponent } from './vehicle-customers.component';

describe('VehicleCustomersComponent', () => {
  let component: VehicleCustomersComponent;
  let fixture: ComponentFixture<VehicleCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
