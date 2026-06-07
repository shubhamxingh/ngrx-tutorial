import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class Counter {
    counter = 0;
    counterSubject = new BehaviorSubject<number>(this.counter)
    getValue(){
        return this.counterSubject;
    }

    incCounter(){
        this.counterSubject.next(++this.counter);
    }

    decCounter(){
        this.counterSubject.next(--this.counter);
    }
}
