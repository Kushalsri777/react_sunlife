import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, reset } from '../actions/counterAction';

function CounterApp(props) {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(inc())}>increment</button>
            <button onClick={()=> dispatch(dec())}>decrement</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
        </div>
    );
}

export default CounterApp;