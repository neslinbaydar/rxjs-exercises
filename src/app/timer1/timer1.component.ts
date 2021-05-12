import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer1',
  templateUrl: './timer1.component.html',
  styleUrls: ['./timer1.component.scss']
})
export class Timer1Component implements OnInit, OnDestroy {
  person$ = new BehaviorSubject({ name: '', age: 0 });
  timer$: Observable<number> = timer(0, 3000);
  destroy$ = new Subject();
  personMapped$;

  ngOnInit() {
    this.personMapped$ = this.person$.pipe(
      takeUntil(this.destroy$),
      filter(person$ => person$.age > 0 && person$.age % 5 === 0), //0'ın 5'e bölümünden de kalan 0.İki defa 0 gelmesin diye >0 şartını ekledim.
      tap((val) => console.log(`Age 5 and the multiples of 5: ${val.age}`))
    );
    this.timer$.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      this.person$.next({ name: '', age: val });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

}





