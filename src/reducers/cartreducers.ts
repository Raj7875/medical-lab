
import { createReducer, on } from "@ngrx/store";
import {  decrementCartCounter, incrementCartCounter } from "src/action/cartaction";




export const initialState = 0;
export const createCounterReducer = createReducer(initialState,
    on(incrementCartCounter,(state)=>state+1 ),
    on(decrementCartCounter, (state)=> state - 1))