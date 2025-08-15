import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatDividerModule],
})
export class materialModule {}
