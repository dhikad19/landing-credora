import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ScrollReveal().reveal('.img-1', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 1000,
    });

    ScrollReveal().reveal('.img-2', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 1200,
    });

    ScrollReveal().reveal('.img-3', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 1400,
    });

    ScrollReveal().reveal('.img-4', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 1600,
    });

    ScrollReveal().reveal('.img-5', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 1800,
    });
  }
}
