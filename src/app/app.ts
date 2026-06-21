import { Component, signal } from '@angular/core';
import { Counter } from './services/counter';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
// import { AppState, selectCounter } from './store/counter.selector';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NgRx tutorial');

  counter_value: number | null = null
  counter$! : Observable<number> 

  constructor(private counterSvc: Counter, private store: Store){}

  ngOnInit(){
    // this.counterSvc.getValue().subscribe( (value: number) =>{
    //   this.counter_value = value;
    // })

    // this.counter$ = this.store.select(selectCounter)
    this.counter$ = this.store.select(counterFeature.selectCounterState)
  }

  increase(){
    // this.counterSvc.incCounter();
    this.store.dispatch(increment())
  }

  decrease(){
    // this.counterSvc.decCounter()
    this.store.dispatch(decrement())
  }

  reset(){
    // this.counterSvc.resetCounter()
    this.store.dispatch(reset())
  }
}
