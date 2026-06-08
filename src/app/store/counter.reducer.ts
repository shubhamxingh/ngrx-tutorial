import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

//Initial State
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  //on increment
  on(increment, (state) => state + 1),

  //on decrement
  on(decrement, (state) => state - 1),

  //on reset
  on(reset, () => initialState),
);
