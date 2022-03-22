import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore , applyMiddleware , combineReducers} from 'redux'
import { createAction, createReducer, configureStore, current, nanoid } from '@reduxjs/toolkit'
//npm install react-redux


const increment = createAction('increment')
const decrement = createAction('decrement')

const initialState = { value: 0 }

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => { state.value++ });
})

let store = configureStore({ reducer: reducer })

class Sample1 extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

function Counter() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

   const clickEvent = () => dispatch(increment());

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={clickEvent}>
          Increment
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}





export default Sample1;