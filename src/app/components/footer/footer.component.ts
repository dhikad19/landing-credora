import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  currentYear: number = new Date().getFullYear();

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.logo', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 200,
    });

    ScrollReveal().reveal('.content', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 400,
    });

    ScrollReveal().reveal('.contact', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 600,
    });
  }
}
