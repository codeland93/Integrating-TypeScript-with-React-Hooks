import React from 'react';
import { CounterProvider, useCounter } from './CounterContext';
import Counter from './Counter';

// Create a component to consume the context
const CounterContextComponent: React.FC = () => {
    const { count } = useCounter();

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Counter from Context: {count}</h1>
            <Counter />
        </div>
    );
};

// Wrap the application in the CounterProvider
const App: React.FC = () => {
    return (
        <CounterProvider>
            <CounterContextComponent />
        </CounterProvider>
    );
};

export default App;
