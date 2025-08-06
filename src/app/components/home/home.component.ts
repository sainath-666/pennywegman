import { Component } from '@angular/core';
import {
  fadeInUp,
  staggerFadeIn,
  cardHover,
  sectionAnimation,
} from '../../shared/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover, sectionAnimation],
})
export class HomeComponent {}
