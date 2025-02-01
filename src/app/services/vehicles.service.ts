import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
  make: string;
  model: string;
  year: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  // Sample vehicle data - in a real app, this would come from an API
  private vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '$95,000',
      image: 'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?auto=format&fit=crop&w=800',
      make: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2023,
      description: 'Luxury sedan with advanced features'
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: '$87,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
      make: 'BMW',
      model: '7 Series',
      year: 2023,
      description: 'Executive luxury vehicle'
    },
    {
      id: 3,
      name: 'Audi A8',
      price: '$89,000',
      image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=800',
      make: 'Audi',
      model: 'A8',
      year: 2023,
      description: 'Premium luxury sedan'
    }
    // Add more vehicles as needed
  ];

  constructor() { }

  searchVehicles(query: string): Observable<Vehicle[]> {
    query = query.toLowerCase().trim();
    
    return of(this.vehicles).pipe(
      map(vehicles => vehicles.filter(vehicle => 
        vehicle.name.toLowerCase().includes(query) ||
        vehicle.make.toLowerCase().includes(query) ||
        vehicle.model.toLowerCase().includes(query) ||
        vehicle.year.toString().includes(query) ||
        vehicle.price.toLowerCase().includes(query)
      ))
    );
  }

  getVehicleById(id: number): Observable<Vehicle | undefined> {
    return of(this.vehicles.find(vehicle => vehicle.id === id));
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}
