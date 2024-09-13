import React, { useState } from 'react';
import './App.css'; 
import Reorder from './Reorder';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReorder = () => {
    setCount(5);
  };

  return (
    <div className="app-container">
      <div className="count-container">
        <p>Inventory Count: {count}</p>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount} disabled={!count}>
          -
        </button>
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
    </div>
  );
};

export default App;
