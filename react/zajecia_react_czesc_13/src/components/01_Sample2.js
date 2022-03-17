import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import localStorage  from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage: localStorage,
}

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
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, { value:0})
const persistor = persistStore(store)

class Sample2 extends React.Component {

    render() {
        return (
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <ReduxCounter/>
               </PersistGate>
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
        count: state.value
    };
}

  function matchDispatchToProps(dispatch) {
    return {
  
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    }
  }

  const ReduxCounter = connect(mapStateToProps, matchDispatchToProps)(Counter);


export default  Sample2;