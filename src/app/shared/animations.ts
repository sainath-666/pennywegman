import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  group,
} from '@angular/animations';

// Simple and smooth animations for consistent use across components
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(20px)',
    }),
    animate(
      '0.6s ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-out', style({ opacity: 1 })),
  ]),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-30px)',
    }),
    animate(
      '0.6s ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(30px)',
    }),
    animate(
      '0.6s ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.9)',
    }),
    animate(
      '0.5s ease-out',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
  ]),
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        }),
        stagger(100, [
          animate(
            '0.6s ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const cardHover = trigger('cardHover', [
  state(
    'normal',
    style({
      transform: 'translateY(0) scale(1)',
    })
  ),
  state(
    'hovered',
    style({
      transform: 'translateY(-5px) scale(1.02)',
    })
  ),
  transition('normal <=> hovered', [animate('0.3s ease-out')]),
]);

export const buttonPress = trigger('buttonPress', [
  state(
    'normal',
    style({
      transform: 'scale(1)',
    })
  ),
  state(
    'pressed',
    style({
      transform: 'scale(0.98)',
    })
  ),
  transition('normal <=> pressed', [animate('0.1s ease-out')]),
]);

// Route animations for smooth page transitions
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    group([
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(20px)',
          }),
          animate(
            '0.6s ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          animate(
            '0.3s ease-in',
            style({
              opacity: 0,
              transform: 'translateY(-10px)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

// List animations for dynamic content
export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-20px)',
        }),
        stagger(50, [
          animate(
            '0.5s ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0)',
            })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

// Page section animations
export const sectionAnimation = trigger('sectionAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(30px)',
    }),
    animate(
      '0.8s ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);
