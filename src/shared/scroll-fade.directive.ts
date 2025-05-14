import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

 ngOnInit(): void {
  this.renderer.addClass(this.el.nativeElement, 'scroll-fade');

  setTimeout(() => {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'show');
          this.observer.unobserve(this.el.nativeElement);
        }
      })
      ,{
        root: null, // viewport
        rootMargin: '0px 0px -20% 0px' // oben, rechts, unten, links
    }})
    

    this.observer.observe(this.el.nativeElement);
  }, 100); 
}
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}