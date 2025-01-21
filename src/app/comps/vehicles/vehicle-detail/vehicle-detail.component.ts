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

  // showModal: boolean = false;

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
    {
      id: 2,
      title: '2019 Honda Passport',
      price: 45000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '35,000km',
      transmission: 'Automatic',
      type: 'SUV',
      image: 'honda2019.avif',
    },
    {
      id: 3,
      title: '2015 Lexus RX 350',
      price: 30000000,
      fuelType: 'Petrol',
      year: 2015,
      mileage: '75,000km',
      transmission: 'Automatic',
      type: 'SUV',
      image: '2019 Mercedes-Benz E350.avif',
    },
    {
      id: 4,
      title: '2019 Jeep Wrangler',
      price: 70000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '45,000km',
      transmission: 'Automatic',
      type: 'SUV',
      image: 'jeepwrangler.avif',
    },
    {
      id: 5,
      title: '2018 Mercedes-Benz S-Class',
      price: 120000000,
      fuelType: 'Petrol',
      year: 2018,
      mileage: '45,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: '2019 Mercedes-Benz E350.avif',
    },
    {
      id: 6,
      title: '2019 Toyota Land Cruiser',
      price: 110000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '50,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: '2019 Mercedes-Benz E350.avif',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.vehicle = this.vehicles.find((v) => v.id === id);
  }
}
