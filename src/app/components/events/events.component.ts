import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  featuredEvents: Event[] = [
    {
      id: 1,
      title: 'Community Town Hall Meeting',
      description:
        'Join us for our monthly town hall meeting to discuss community issues and upcoming initiatives.',
      category: 'Community',
      date: 'October 25, 2024',
      location: 'City Hall Auditorium',
    },
    {
      id: 2,
      title: 'Election Day Volunteer Training',
      description:
        'Training session for volunteers who will be helping at polling stations on Election Day.',
      category: 'Volunteer',
      date: 'October 28, 2024',
      location: 'Community Center',
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
    },
    {
      id: 6,
      title: 'Holiday Food Drive',
      description:
        'Annual food drive to help families in need during the holidays.',
      category: 'Community',
      date: 'December 1, 2024',
      location: 'Various Locations',
    },
    {
      id: 7,
      title: 'Volunteer Appreciation Dinner',
      description:
        'Annual dinner to thank our dedicated volunteers for their service.',
      category: 'Recognition',
      date: 'December 10, 2024',
      location: 'Community Center',
    },
    {
      id: 8,
      title: 'New Year Planning Meeting',
      description:
        "Strategic planning meeting for the upcoming year's programs and initiatives.",
      category: 'Planning',
      date: 'January 15, 2025',
      location: 'Office Conference Room',
    },
  ];
}
