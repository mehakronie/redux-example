import { createSlice } from '@reduxjs/toolkit'
export const CounterSlice = createSlice(
    {
        name: 'counter',
        initialState: 0,
        reducers: {
            incrementer: (state) => state + 1,
            decreamnter: (state) => state - 1

        }
    }

)
export const { incrementer, decreamnter } = CounterSlice.actions;
export default CounterSlice.reducer