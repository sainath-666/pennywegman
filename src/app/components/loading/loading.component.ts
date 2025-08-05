import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      [@fadeIn]
    >
      <div class="bg-white rounded-lg p-8 shadow-xl" [@scaleIn]>
        <div class="flex flex-col items-center">
          <div class="spinner mb-4"></div>
          <p class="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [animate('0.3s ease-out')]),
    ]),
    trigger('scaleIn', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.8)',
        })
      ),
      transition(':enter', [animate('0.4s ease-out')]),
    ]),
  ],
})
export class LoadingComponent {}
