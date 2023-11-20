import React from 'react';
import { useSelector } from 'react-redux';

function CounterState(props) {
    const count = useSelector(state => state.counter)
    
    return (
        <div>
            <p>The initial state is : {count}</p>
            
        </div>
    );
}

export default CounterState;