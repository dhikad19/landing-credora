import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit {
  @Input() brandName = 'Credora';
  @Input() headline = 'Transform the way you manage your finances';

  onPrimaryClick(): void {
    console.log('primary click');
  }

  onSecondaryClick(): void {
    console.log('secondary click');
  }

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.about__header', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 200,
      interval: 400,
    });

    ScrollReveal().reveal('.scroll-content-about', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 450,
    });

    ScrollReveal().reveal('.about-list', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease',
      delay: 450,
    });
  }
}
