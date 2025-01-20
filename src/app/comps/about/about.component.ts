import { Component } from '@angular/core';
import { faBuilding, faUser, faTrophy, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  stats = [
    {
      icon: faBuilding,
      value: '7+ Years',
      description: 'Of industry experience',
    },
    {
      icon: faUser,
      value: '1000+',
      description: 'Happy customers',
    },
    {
      icon: faTrophy,
      value: '25+',
      description: 'Industry awards',
    },
    {
      icon: faHeart,
      value: '100%',
      description: 'Customer satisfaction',
    },
  ];
}
