import { Component, signal } from '@angular/core';
import { Counter } from './services/counter';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NgRx tutorial');

  counter_value: number | null = null

  constructor(private counterSvc: Counter){}

  ngOnInit(){
    this.counterSvc.getValue().subscribe( (value: number) =>{
      this.counter_value = value;
    })
  }

  increase(){
    this.counterSvc.incCounter();
  }

  decrease(){
    this.counterSvc.decCounter()
  }

  reset(){
    this.counterSvc.resetCounter()
  }
}
