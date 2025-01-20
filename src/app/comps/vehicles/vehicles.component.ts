import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: false,
  
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  filters = {
    make: '',
    price: 15000000, // Default value for price slider
    minPrice: 15000000,
    maxPrice: 200000000,
    year: '',
    bodyType: '',
  };

  makes = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Lexus']; // Example makes
  years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i); // Generate years dynamically
  bodyTypes = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']; // Example body types


  cars = [
    {
      id: 1,
      title: '2019 Mercedes-Benz E350',
      price: 90000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '40,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: '2019 Mercedes-Benz E350.avif', // Replace with actual image URL
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
      image: 'honda2019.avif', // Replace with actual image URL
    },
    {
      id: 3,
      title: '2019 Mercedes-Benz E350',
      price: 90000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '40,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: 'jeepwrangler.avif', // Replace with actual image URL
    },
    {
      id: 4,
      title: '2019 Mercedes-Benz E350',
      price: 90000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '40,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: '2019 Mercedes-Benz E350.avif', // Replace with actual image URL
    },
    {
      id: 5,
      title: '2019 Honda Passport',
      price: 45000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '35,000km',
      transmission: 'Automatic',
      type: 'SUV',
      image: 'honda2019.avif', // Replace with actual image URL
    },
    {
      id: 6,
      title: '2019 Mercedes-Benz E350',
      price: 90000000,
      fuelType: 'Petrol',
      year: 2019,
      mileage: '40,000km',
      transmission: 'Automatic',
      type: 'Sedan',
      image: 'jeepwrangler.avif', // Replace with actual image URL
    },
  ]
  constructor(private router: Router) {}

  viewCarDetails(carId: number) {
    this.router.navigate(['/car', carId]);
  }
}
