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
    price: 15000000,
    minPrice: 15000000,
    maxPrice: 200000000,
    year: '',
    bodyType: '',
  };

  makes = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Lexus'];
  years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
  bodyTypes = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'];

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
      image: '2019 Mercedes-Benz E350.avif',
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

  constructor(private router: Router) {}

  get filteredCars() {
    return this.cars.filter((car) => {
      const matchesPrice = car.price >= this.filters.price;
      const matchesMake =
        !this.filters.make || car.title.toLowerCase().includes(this.filters.make.toLowerCase());
      const matchesYear = !this.filters.year || car.year === +this.filters.year;

      return matchesPrice && matchesMake && matchesYear;
    });
  }

  viewCarDetails(carId: number) {
    this.router.navigate(['/car', carId]);
  }}
