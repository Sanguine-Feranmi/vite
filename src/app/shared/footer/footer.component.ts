import { Component } from '@angular/core';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faMessage = faEnvelope;
  faCopyright = faCopyright

  quick = ['Vehicles', 'Financing', 'Trade-In', 'Contact']
  connect = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube']
}
