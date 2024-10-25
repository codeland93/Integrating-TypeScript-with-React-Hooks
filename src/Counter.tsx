import React, { useState } from 'react';

// Task 1: Create a Functional Component Named Counter
const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Initialize count state with type number

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
