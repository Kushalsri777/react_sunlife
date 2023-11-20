import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { dec, inc, reset } from '../actions/counterAction';
import CounterState from './CounterState';
import CounterApp from './CounterApp';

function MyCounter(props) {
    // const count = useSelector(state => state.counter)
    // const dispatch = useDispatch()
    return (
        <div>
            {/* <p>The initial state is : {count}</p> */}
            <CounterState/>
            <CounterApp/>
            {/* <button onClick={()=> dispatch(inc())}>increment</button>
            <button onClick={()=> dispatch(dec())}>decrement</button>
            <button onClick={()=> dispatch(reset())}>reset</button> */}
        </div>
    );
}

export default MyCounter;