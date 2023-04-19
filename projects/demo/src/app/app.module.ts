import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPickRangeModule } from 'mat-pick-range-dates';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatPickRangeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
