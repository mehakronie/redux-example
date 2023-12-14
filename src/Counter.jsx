import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { store } from "./store/CounterStore";
import { incrementer, decreamnter } from "./slice/counterSlice";


export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    const handleIncrement = () => {
        dispatch(incrementer());
    };

    const handleDecrement = () => {
        dispatch(decreamnter());
    };

    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <br />
            {count}
            <br />
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};
