import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { Timer1Component } from './timer1/timer1.component';
import { Timer2Component } from './timer2/timer2.component';

const routes: Routes = [
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: 'timer-1',
    component: Timer1Component,
  },
  {
    path: 'timer-2',
    component: Timer2Component,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
