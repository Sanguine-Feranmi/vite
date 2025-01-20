import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = new BehaviorSubject<boolean>(false); // Default to light mode
  isDarkMode$ = this.isDarkMode.asObservable();

  toggleDarkMode() {
    const currentMode = this.isDarkMode.value;
    this.isDarkMode.next(!currentMode); // Toggle the mode
  }

  setDarkMode(state: boolean) {
    this.isDarkMode.next(state); // Set mode explicitly
  }
}
