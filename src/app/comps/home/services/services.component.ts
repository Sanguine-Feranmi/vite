import { Component } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faRecycle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  serve = [
    {
      icon:  faShieldAlt,
      title: 'Premium Vehicles',
      titleC: 'text-2xl',
      desc: 'Carefully selected luxury cars from the world finest manufacturers.',
      descC: 'text-gray-500 text-[18px]',
      btn: 'View Collecction',
      btnC : 'border-gray-500 border-[1px] bg-transparent rounded-md w-full py-2 text-white',
      label : '/vehicles',
      disabled: false
    },
    {
      icon:  faCreditCard,
      title: 'Flexible Financing',
      titleC: 'text-2xl',
      desc: 'Tailored financial solutions including vehicle loans, leasing options, and maintenance policies.',
      descC: 'text-gray-500 text-[18px]',
      btn: 'View Option',
      btnC : 'border-gray-500 border-[1px] bg-transparent rounded-md w-full py-2 text-white',
      label : '/financing',
      disabled: false
    },
    {
      icon:  faRecycle,
      title: 'Trade-In Service',
      titleC: 'text-2xl',
      desc: 'Exchange your current vehicle as part payment towards your new luxury car. We offer competitive valuations and a hassle-free process',
      descC: 'text-gray-500 text-[18px]',
      btn: 'Coming soon',
      btnC : 'border-gray-500 border-[1px] bg-transparent rounded-md w-full py-2 text-white',
      disabled: true
    },
  ]
}
