import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
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
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

}
