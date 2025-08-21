import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit {
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
    ScrollReveal().reveal('.scroll-container', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 800,
    });
  }
}
