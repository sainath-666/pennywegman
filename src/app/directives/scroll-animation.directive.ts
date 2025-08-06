import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'animate-fade-in-up';
  @Input() threshold: number = 0.1;
  @Input() delay: number = 0;
  @Input() once: boolean = true;

  private observer: IntersectionObserver;
  private hasAnimated: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // Initialize element in hidden state
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(20px)'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'all 0.6s ease-out'
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!this.once || !this.hasAnimated)) {
            setTimeout(() => {
              this.animateElement();
            }, this.delay);

            if (this.once) {
              this.observer.unobserve(entry.target);
              this.hasAnimated = true;
            }
          } else if (!entry.isIntersecting && !this.once) {
            this.resetElement();
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );
  }

  ngOnInit() {
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private animateElement() {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(0)'
    );
    this.renderer.addClass(this.element.nativeElement, this.animationClass);
  }

  private resetElement() {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(20px)'
    );
    this.renderer.removeClass(this.element.nativeElement, this.animationClass);
  }
}
