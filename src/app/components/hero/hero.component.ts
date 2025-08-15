import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  anim1Options: AnimationOptions = {
    path: 'assets/lottie/Email.json',
    loop: true,
    autoplay: true,
  };

  anim2Options: AnimationOptions = {
    path: 'assets/lottie/Investments.json',
    loop: true,
    autoplay: true,
  };

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.reveal-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 0,
    });

    ScrollReveal().reveal('.reveal-title', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 200,
    });

    ScrollReveal().reveal('.reveal-description', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 400,
    });

    ScrollReveal().reveal('.reveal-button', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 600,
    });

    ScrollReveal().reveal('.reveal-right', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 800,
    });

    // ScrollReveal().reveal('.item-1', {
    //   origin: 'left',
    //   distance: '20px',
    //   duration: 1000,
    //   easing: 'ease',
    //   delay: 800,
    // });

    // ScrollReveal().reveal('.item-2', {
    //   origin: 'left',
    //   distance: '20px',
    //   duration: 1000,
    //   easing: 'ease',
    //   delay: 1000,
    // });

    // ScrollReveal().reveal('.item-3', {
    //   origin: 'left',
    //   distance: '20px',
    //   duration: 1000,
    //   easing: 'ease',
    //   delay: 1200,
    // });

    // ScrollReveal().reveal('.item-4', {
    //   origin: 'left',
    //   distance: '20px',
    //   duration: 1000,
    //   easing: 'ease',
    //   delay: 1400,
    // });
  }
}
