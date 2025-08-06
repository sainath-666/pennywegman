import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerFadeIn, cardHover } from '../../shared/animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: string;
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
  imports: [CommonModule, ScrollAnimationDirective, FontAwesomeModule],
  templateUrl: './contact.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover],
})
export class ContactComponent {
  // Font Awesome Icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faInfoCircle = faInfoCircle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  contactInfo: ContactInfo[] = [
    {
      id: 1,
      title: 'Email',
      value: 'hello@pennywegman.com',
      icon: 'envelope',
    },
    {
      id: 2,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: 'phone',
    },
    {
      id: 3,
      title: 'Address',
      value: '123 Tech Street, Silicon Valley, CA 94025',
      icon: 'location-dot',
    },
    {
      id: 4,
      title: 'Support',
      value: 'support@pennywegman.com',
      icon: 'info-circle',
    },
  ];

  socialMedia: SocialMedia[] = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: 'linkedin',
      url: '#',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: 'twitter',
      url: '#',
    },
    {
      id: 3,
      name: 'Facebook',
      icon: 'facebook',
      url: '#',
    },
    {
      id: 4,
      name: 'Instagram',
      icon: 'instagram',
      url: '#',
    },
  ];
}
