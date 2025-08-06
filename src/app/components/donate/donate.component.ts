import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerFadeIn, cardHover } from '../../shared/animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface DonationOption {
  id: number;
  amount: number;
  description: string;
  icon: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './donate.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover],
})
export class DonateComponent {
  donationOptions: DonationOption[] = [
    {
      id: 1,
      amount: 25,
      description: 'Provides meals for 5 families',
      icon: '🍽️',
    },
    {
      id: 2,
      amount: 50,
      description: 'Supports educational programs',
      icon: '📚',
    },
    {
      id: 3,
      amount: 100,
      description: 'Funds community outreach events',
      icon: '🤝',
    },
  ];

  impactStats: ImpactStat[] = [
    {
      value: '$50,000+',
      label: 'Total Donations Raised',
    },
    {
      value: '1,200+',
      label: 'Families Helped',
    },
    {
      value: '25+',
      label: 'Community Events',
    },
  ];
}
