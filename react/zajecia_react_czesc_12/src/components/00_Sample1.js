import React from 'react';
import { Provider , useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'
//npm install react-redux

function reducer(state = {}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value+1}; 
        case 'DECREMENT':
            return {value: state.value-1}; 
        default:
            return state;
    }
}

const store = createStore(reducer, {value:0})

const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

class Sample1 extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
    }
}

function Counter() {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }







export default  Sample1;