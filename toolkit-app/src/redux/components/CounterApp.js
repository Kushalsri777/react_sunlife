import React from 'react';
import { decrement, increment, reset } from '../counterRedux';
import { useDispatch, useSelector } from 'react-redux';
// import { reset } from '../../../../reactredux/src/actions/counterAction';

function CounterApp(props) {
    const count = useSelector(state => state.acounter.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <p>The initial state is : {count}</p>
            
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
        </div>
    );
}

export default CounterApp;