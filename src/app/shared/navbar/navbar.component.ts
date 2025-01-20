import { Component } from '@angular/core';  
import { faMagnifyingGlass, faUser, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  img = 'logo.jpg'
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars; 
  faTimes = faTimes; 

  isDarkMode = true; 
  isMenuOpen = false;

  navItems = [
    { label: 'Home', link: ''},
    { label: 'About', link: '/about'},
    { label: 'Vehicles', link: '/vehicles'},
  ];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
