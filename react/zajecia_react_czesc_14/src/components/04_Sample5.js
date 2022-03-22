import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore , applyMiddleware , combineReducers} from 'redux'
import { createAction, createReducer, configureStore, current, nanoid } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
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


const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const   fetchSomeData =  async (dispatch, getState) => {
  // Make an async HTTP request
  const response = await axios.get('todos');
  dispatch({ type: 'todos/todosLoaded', payload: response })
}

store.dispatch(fetchSomeData);

function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }
    const response = await axios.post('todos', { todo: initialTodo })
    dispatch({ type: 'todos/todoAdded', payload: response.todo })
  }
}

class Sample5 extends React.Component {

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

  
  const clickEvent = () => dispatch(saveNewTodo('ala'));

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







export default Sample5;