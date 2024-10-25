import React, { createContext, useContext, useState } from 'react';

// Define a custom type for the counter context
interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

// Create the context
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Context provider component
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

// Custom hook for using the Counter context
const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};

export { CounterProvider, useCounter };
