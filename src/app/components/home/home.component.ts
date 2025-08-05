import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
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
  ],
})
export class HomeComponent {}
