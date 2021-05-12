import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { Timer1Component } from './timer1/timer1.component';
import { Timer2Component } from './timer2/timer2.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    Timer1Component,
    Timer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
