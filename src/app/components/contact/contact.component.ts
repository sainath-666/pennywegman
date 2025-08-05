import { Component } from '@angular/core';

interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: string;
}

interface OfficeHour {
  day: string;
  time: string;
}

interface SocialMedia {
  id: number;
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      id: 1,
      title: 'Email',
      value: 'hello@pennywegman.com',
      icon: '📧',
    },
    {
      id: 2,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📞',
    },
    {
      id: 3,
      title: 'Address',
      value: '123 Tech Street, Silicon Valley, CA 94025',
      icon: '📍',
    },
    {
      id: 4,
      title: 'Support',
      value: 'support@pennywegman.com',
      icon: '🛠️',
    },
  ];

  officeHours: OfficeHour[] = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  socialMedia: SocialMedia[] = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: '🐦',
      url: '#',
    },
    {
      id: 3,
      name: 'Facebook',
      icon: '📘',
      url: '#',
    },
    {
      id: 4,
      name: 'Instagram',
      icon: '📷',
      url: '#',
    },
  ];
}
