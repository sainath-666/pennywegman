import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  fadeInUp,
  staggerFadeIn,
  cardHover,
  sectionAnimation,
} from '../../shared/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover, sectionAnimation],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToDonate() {
    this.router.navigate(['/donate']);
  }
}
