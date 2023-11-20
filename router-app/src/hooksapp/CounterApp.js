import React, { useEffect, useState } from 'react';

function CounterApp(props) {

    //init the state
    const [count, setCount]=useState(10)

    useEffect(()=>{
        console.log('called everytime');
    },[count])
    const increment = () => {
        setCount(count+1)
    }
    return (
        <div>
            <p>The Counter is: {count}</p>
            <button onClick={increment}>Increment +1</button>
            <button onClick={()=>setCount(count - 1)}>Decrement - 1</button>

        </div>
    );
}

export default CounterApp;