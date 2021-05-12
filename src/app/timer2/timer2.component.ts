import { Component, OnInit } from '@angular/core';
import { iif, Observable, of, Subject, timer } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.scss']
})
export class Timer2Component implements OnInit {
  // R = new Observable(observer => observer.next('R'))
  // X = new Observable(observer => observer.next('X'))
  R = of('R')
  X = of('X')
  timer$: Observable<number> = timer(0, 1000);
  destroy$ = new Subject();

  constructor() { }
  ngOnInit(): void {
    this.timer$.pipe(
      takeUntil(this.destroy$),
      mergeMap((val) => iif(() => val % 2 === 0, this.R, this.X)))
      .subscribe((val) => console.log(val));
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

}
