import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  @Input() brandName = 'Credora';
  @Input() headline = 'Transform the way you manage your finances';

  @Input()
  description = `Mengelola keuangan tidak harus rumit. ${'Your Brand Name'} membantu Anda 
                          mengatur anggaran, menabung, dan berinvestasi dengan cara yang lebih cerdas dan efisien—agar Anda 
                          bisa mengurangi stres, menghindari pengeluaran tidak perlu, dan membangun keamanan finansial jangka panjang.`;

  @Input() benefits: { title: string; copy: string }[] = [
    {
      title: 'Kontrol Penuh',
      copy: 'Pantau pemasukan, pengeluaran, dan target secara real-time untuk keputusan yang lebih tepat.',
    },
    {
      title: 'Efisien & Transparan',
      copy: 'Alur yang sederhana dan metrik yang jelas—tanpa biaya tersembunyi.',
    },
    {
      title: 'Personalisasi',
      copy: 'Strategi disesuaikan dengan tujuan unik Anda: dari budgeting, saving, hingga investasi.',
    },
  ];

  @Input() primaryCtaLabel = 'Mulai Sekarang';
  @Input() secondaryCtaLabel = 'Pelajari Fitur';

  onPrimaryClick(): void {
    console.log('primary click');
  }

  onSecondaryClick(): void {
    console.log('secondary click');
  }
}
