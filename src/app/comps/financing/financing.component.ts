import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faShieldAlt, faWallet, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-financing',
  standalone: false,
  
  templateUrl: './financing.component.html',
  styleUrl: './financing.component.css'
})
export class FinancingComponent {
  financingOptions = [
    {
      icon: faWallet,
      title: 'Vehicle Loans',
      description: 'Competitive interest rates with flexible repayment terms up to 72 months.',
      features: ['Low interest rates', 'Quick approval', 'Flexible terms', 'No hidden fees'],
    },
    {
      icon: faClock,
      title: 'Lease Options',
      description: 'Drive a new luxury vehicle with lower monthly payments and flexible end-of-term options.',
      features: ['Lower payments', 'New car every few years', 'Warranty coverage', 'Flexible terms'],
    },
    {
      icon: faShieldAlt,
      title: 'Premium Financing',
      description: 'Exclusive financing options for high-end luxury vehicles with personalized service.',
      features: ['Competitive rates', 'Personalized service', 'Special terms', 'Quick processing'],
    },
  ];

  pricingPlans = [
    {
      title: 'Basic Care',
      price: '₦500,000',
      period: 'per year',
      features: [
        'Annual maintenance service',
        'Oil changes',
        'Tire rotations',
        'Basic inspections',
      ],
      buttonText: 'Learn More',
      isPopular: false,
      icon: faCheck
    },
    {
      title: 'Premium Care',
      price: '₦1,200,000',
      period: 'per year',
      features: [
        'Everything in Basic Care',
        'Extended warranty coverage',
        'Priority service scheduling',
        'Roadside assistance',
        'Wear and tear coverage',
      ],
      buttonText: 'Learn More',
      isPopular: true,
      icon: faCheck
    },
    {
      title: 'Ultimate Care',
      price: '₦2,000,000',
      period: 'per year',
      features: [
        'Everything in Premium Care',
        'Complete vehicle protection',
        'Concierge service',
        'Replacement vehicle service',
        'Annual detailed cleaning',
      ],
      buttonText: 'Learn More',
      isPopular: false,
      icon: faCheck
    },
  ];
}
