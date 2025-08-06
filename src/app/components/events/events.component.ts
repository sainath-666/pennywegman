import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerFadeIn, cardHover } from '../../shared/animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  img?: string; // Optional image property
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './events.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover],
})
export class EventsComponent {
  featuredEvents: Event[] = [
    {
      id: 1,
      title: 'Fundraiser for Kane County Circuit Clerk Theresa Barreiro and Treasurer Penny Wegman',
      description:
        'Join us for a fundraiser for Kane County Circuit Clerk Theresa Barreiro and Treasurer Penny Wegman. The event is hosted by State Senator Cristina Castro.',
      category: 'Fundraiser',
      date: 'October 25, 2024',
      location: 'Kane County',
      img: 'assets/1.jpg'
    },
    {
      id: 2,
      title: 'Election Day Volunteer Training',
      description:
        'Training session for volunteers who will be helping at polling stations on Election Day.',
      category: 'Volunteer',
      date: 'August 24, 2023',
      location: 'Martini Room, 161 E. Chicago Street, Elgin',
      img: 'assets/2.jpg'
    },
  ];

  allEvents: Event[] = [
    {
      id: 3,
      title: 'Voter Registration Drive',
      description: 'Help us register new voters at the local library.',
      category: 'Voting',
      date: 'October 20, 2024',
      location: 'Public Library',
    },
    {
      id: 4,
      title: 'Fundraising Gala',
      description: 'Annual fundraising gala to support our community programs.',
      category: 'Fundraising',
      date: 'November 15, 2024',
      location: 'Grand Hotel',
    },
    {
      id: 5,
      title: 'Youth Leadership Workshop',
      description:
        'Workshop for young people interested in civic engagement and leadership.',
      category: 'Education',
      date: 'November 8, 2024',
      location: 'Youth Center',
    }
  ];
}
