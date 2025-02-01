import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-negotiateprice',
  standalone: false,
  
  templateUrl: './negotiateprice.component.html',
  styleUrls: ['./negotiateprice.component.css']
})
export class NegotiatepriceComponent {
  @Input() vehicleTitle: string = '';
  @Output() close = new EventEmitter<void>();

  offer: string = '';
  message: string = '';

  onSubmit() {
    console.log('Offer:', this.offer);
    console.log('Message:', this.message);
    this.close.emit(); // Close the modal after submission
  }

}
