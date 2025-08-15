import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { materialModule } from './material.module';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    SponsorsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forRoot(routes),
    materialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
