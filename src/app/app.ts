import { Component, signal } from '@angular/core';
import { Counter } from './services/counter';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NgRx tutorial');

  counter_value: number | null = null

  constructor(private counterSvc: Counter, private store: Store){}

  ngOnInit(){
    // this.counterSvc.getValue().subscribe( (value: number) =>{
    //   this.counter_value = value;
    // })
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
