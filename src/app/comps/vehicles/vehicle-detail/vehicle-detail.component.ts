import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  standalone: false,
  
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.css'
})
export class VehicleDetailComponent implements OnInit {
  vehicle: any;

  // Sample data for vehicles (Replace this with a service call if fetching from API)
  vehicles = [
    {
      id: 1,
      title: '2019 Mercedes-Benz E350',
      price: 90000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '40,000 km',
      transmission: 'Automatic',
      engine: '2.0L Turbo',
      power: '255 hp',
      acceleration: '5.9s',
      topSpeed: '240 km/h',
      image: 'assets/mercedes.jpg',
      description: 'Elegant Mercedes-Benz E350 with advanced technology and comfort.',
    },
    // Add more vehicle objects
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.vehicle = this.vehicles.find((v) => v.id === id);
  }
}
