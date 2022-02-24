import React from 'react';

const countInitializer = initialState => {
  return {
    count: initialState,
    otherProp: 0
  };
};

const countReducer = state => state; // Dummy reducer

export default function UseReducerLazy()  {
  const [countState ] =
    React.useReducer(countReducer, 2, countInitializer);

  // Note the `countState` will be initialized state direct on first render
  return JSON.stringify(countState, null, 2);
}
