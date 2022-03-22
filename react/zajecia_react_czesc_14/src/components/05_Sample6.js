import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore , applyMiddleware , combineReducers} from 'redux'
import { createAction, createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';
//npm install react-redux


const increment = createAction('increment')
const todosLoaded = createAction('todos/todosLoaded')

const initialState = {todos:[],  status:'idle' }
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


const fetchSomeData = createAsyncThunk(
  'todos/todosLoaded',
  async () => {
    const response = await axios.get('todos');
    return response.data;
  }
)

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async (text, thunkAPI) => {
  const initialTodo = { text }
  const response = await axios.post('todos', { todo: initialTodo })
  debugger;
  return response.data.todo
})



const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // omit case reducers
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSomeData.pending, (state, action) => {
        debugger
        state.status = 'loading'
      })
      .addCase(fetchSomeData.fulfilled, (state, action) => {
        debugger
        const newEntities = {}
        action.payload.forEach(todo => {
          newEntities[todo.id] = todo
        })
        state.todos = newEntities
        state.status = 'idle'
      })
      .addCase(saveNewTodo.fulfilled, (state, action) => {
      
        console.log(action);
      })
  }
})

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(todosSlice.reducer, middleware)


store.dispatch(fetchSomeData());


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
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  const clickEvent = () => dispatch(saveNewTodo('ala'));


  return (
    <div>
      <div>
        Status:
        <span>{status}</span>

        <button
          aria-label="Increment value"
          onClick={clickEvent}>
          Increment
        </button>
      </div>
    </div>
  )
}







export default Sample5;