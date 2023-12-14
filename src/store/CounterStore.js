import {configureStore} from "@reduxjs/toolkit"
import { CounterSlice } from "../slice/counterSlice"

export const store = configureStore({
    reducer:{
    counter:CounterSlice.reducer,
    },
})