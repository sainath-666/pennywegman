import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
} from '@angular/animations';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  animations: [
    trigger('fadeInUp', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(30px)',
        })
      ),
      transition(':enter', [animate('0.8s ease-out')]),
    ]),
    trigger('slideInLeft', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(-50px)',
        })
      ),
      transition(':enter', [animate('0.6s ease-out')]),
    ]),
    trigger('slideInRight', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(50px)',
        })
      ),
      transition(':enter', [animate('0.6s ease-out')]),
    ]),
    trigger('scaleIn', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.8)',
        })
      ),
      transition(':enter', [animate('0.5s ease-out')]),
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(200, [
              animate(
                '0.6s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('bounceIn', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.3)',
        })
      ),
      transition(':enter', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
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
