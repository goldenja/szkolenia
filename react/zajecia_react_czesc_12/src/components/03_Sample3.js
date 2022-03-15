import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore , combineReducers  } from 'redux'
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

function reducerHistory (state) {
  return [
      {
          id: 1,
          value: 17
      },
      {
          id: 2,
          value: 25
      }
  ]
}

const allReducers = combineReducers({
  counter: reducer,
  history: reducerHistory
});

const store = createStore(allReducers, {counter : { value:0}, history:[]});

class Sample3 extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ReduxCounter/>
            </Provider>
        );
    }
}

function Counter(props) {
  console.log(props);
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => props.increment()}
          >
            Increment
          </button>
          <span>{JSON.stringify(props.history)}</span>
          <span>{props.count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => props.decrement()}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }

  function mapStateToProps(state) {
    return {
        count: state.counter.value,
        history: state.history
    };
}

  function matchDispatchToProps(dispatch) {
    return {
  
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    }
  }

  const ReduxCounter = connect(mapStateToProps, matchDispatchToProps)(Counter);


export default  Sample3;