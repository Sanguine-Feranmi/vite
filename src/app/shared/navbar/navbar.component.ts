import { Component } from '@angular/core';  
import { faMagnifyingGlass, faUser, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';
import { Router } from '@angular/router';
import { VehiclesService } from '../../services/vehicles.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  img = 'logo.jpg';
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars; 
  faTimes = faTimes; 

  isDarkMode = true; 
  isMenuOpen = false;
  searchQuery: string = '';
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();

  navItems = [
    { label: 'Home', link: ''},
    { label: 'About', link: '/about'},
    { label: 'Vehicles', link: '/vehicles'},
    { label: 'Financing', link: '/financing'},
    { label: 'Contact', link: '/contact'}
  ];

  constructor(
    private darkModeService: DarkModeService,
    private vehiclesService: VehiclesService,
    private router: Router
  ) {
    this.darkModeService.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );

    // Setup search debounce
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.performSearch(searchTerm);
    });
  }

  toggleTheme() {
    this.darkModeService.toggleDarkMode();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSearch() {
    this.searchSubject.next(this.searchQuery);
  }

  performSearch(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.searchResults = [];
      return;
    }

    this.vehiclesService.searchVehicles(searchTerm).subscribe(
      results => {
        this.searchResults = results;
      },
      error => {
        console.error('Error searching vehicles:', error);
        this.searchResults = [];
      }
    );
  }

  selectSearchResult(result: any) {
    this.searchQuery = '';
    this.searchResults = [];
    this.router.navigate(['/vehicles', result.id]);
  }
}
