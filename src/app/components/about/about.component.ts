import { Component } from '@angular/core';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business strategy.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      bio: 'Technical expert specializing in scalable architecture and emerging technologies.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      bio: 'Creative director focused on user experience and innovative design solutions.',
    },
  ];
}
