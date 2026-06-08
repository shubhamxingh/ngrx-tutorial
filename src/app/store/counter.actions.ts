import { createAction } from "@ngrx/store";

//Increment Action - [] contains feature name followed by action name
//here -> Counter = feature name, Increment = action name
export const increment = createAction(
    '[Counter] Increment'
)

export const decrement = createAction(
    '[Counter] Decrement'
)

export const reset = createAction(
    '[Counter] Reset'
)