import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTimes,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 backdrop-blur-sm bg-black/30"
        (click)="close()"
      ></div>

      <!-- Modal -->
      <div
        class="relative bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-6 max-w-md w-full m-4 animate-modal-fade-in border border-white/20"
      >
        <!-- Close button -->
        <button
          (click)="close()"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <fa-icon [icon]="faTimes"></fa-icon>
        </button>

        <!-- Content -->
        <div class="text-center">
          <div class="mb-4">
            <fa-icon
              [icon]="type === 'success' ? faCheckCircle : faExclamationCircle"
              [class]="
                type === 'success'
                  ? 'text-green-500 text-5xl'
                  : 'text-red-500 text-5xl'
              "
            ></fa-icon>
          </div>
          <h3 class="text-xl font-semibold mb-2">
            {{ type === 'success' ? 'Success!' : 'Error!' }}
          </h3>
          <p class="text-gray-600">{{ message }}</p>
        </div>

        <!-- Action button -->
        <div class="mt-6 text-center">
          <button
            (click)="close()"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .animate-modal-fade-in {
        animation: modalFadeIn 0.3s ease-out;
      }
      @keyframes modalFadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';
  @Output() closeModal = new EventEmitter<void>();

  faTimes = faTimes;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  close() {
    this.closeModal.emit();
  }
}
