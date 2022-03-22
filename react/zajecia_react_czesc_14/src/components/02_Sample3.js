import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore , applyMiddleware , combineReducers} from 'redux'
import { createAction, createReducer, configureStore, current, nanoid } from '@reduxjs/toolkit'
import axios from 'axios';
//npm install react-redux


const increment = createAction('increment')
const todosLoaded = createAction('todos/todosLoaded')

const initialState = { value: 0 , todos:[] }
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => { state.value++ })
  builder.addCase(todosLoaded, (state, action) => { state.todos = action.payload.data })
  ;
})

const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}

const middleware = applyMiddleware(asyncFunctionMiddleware)
const store = createStore(reducer, middleware)

const fetchSomeData = (dispatch, getState) => {
  // Make an async HTTP request
  axios.get('todos').then(todos => {
    // Dispatch an action with the todos we received
    dispatch({ type: 'todos/todosLoaded', payload: todos })
    // Check the updated store state after dispatching
    const allTodos = getState().todos
    console.log('Number of todos after loading: ', allTodos.length)
  })
}

store.dispatch(fetchSomeData);



class Sample3 extends React.Component {

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







export default Sample3;