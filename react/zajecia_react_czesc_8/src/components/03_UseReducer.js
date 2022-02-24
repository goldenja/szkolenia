import React from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
  }
}

export default function UseReducer() {
  const [count, dispatch] = React.useReducer(countReducer, 0);

  // React daje gwarancje, że funkcja dispatch jest tożsamościowa i że nie zmienia się podczas kolejnych renderowań. 
  // Dlatego też można ją bezpiecznie pominąć na liście zależności useEffect i useCallback.

  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}