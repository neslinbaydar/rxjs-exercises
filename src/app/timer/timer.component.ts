import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {
  timer$: Observable<number> = timer(3000, 1000)
  timerDestroy$ = new Subject();
  subscription: Subscription;
  startTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.timer$.pipe(takeUntil(this.timerDestroy$)).subscribe((value) => console.log(value))
  }
  ngOnDestroy() {
    this.timerDestroy$.next();
  }
}
