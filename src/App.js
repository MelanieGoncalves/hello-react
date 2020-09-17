import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>

    </div>
  );
}

export default App;
