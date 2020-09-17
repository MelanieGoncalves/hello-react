import React from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter2 from './components/Counter2';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';


function App() {
  return (
    <div className="App">
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Melanie' : 'Guest'} /> */}
      <Counter2 render={(count, incrementCount) => (
        <ClickCounterTwo
          count={count}
          incrementCount={incrementCount} />
      )} />
      <Counter2
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount} />
        )} />
    </div>
  );
}

export default App;
