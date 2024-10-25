import React from 'react';
import { CounterProvider } from './CounterContext'; // Import the CounterProvider
import CounterContextComponent from './CounterContextComponent'; // Import the component that uses the context

const App: React.FC = () => {
    return (
        <CounterProvider>
            <CounterContextComponent />
        </CounterProvider>
    );
};

export default App;
