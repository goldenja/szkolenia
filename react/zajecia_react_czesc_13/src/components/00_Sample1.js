import React from 'react';
import { Provider , useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'
import { createAction, createReducer , configureStore ,current, nanoid  } from '@reduxjs/toolkit'
//npm install react-redux


const increment = createAction('increment')
const decrement = createAction('decrement')

const initialState = { value: 0 }

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      //console.log('before', current(state))
      state.value++
      //console.log('after', current(state))
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
})

// const reducer = createReducer(initialState, {
//   increment: (state, action) =>  {return { value:state.value+1}},
//   decrement: (state, action) => {return { value:state.value-1}}
// })

// const reducer = createReducer(initialState, {
//   increment: (state, action) =>  {state.value++},
//   decrement: (state, action) => {state.value--}
// })


// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('increment', (state) => {state.value++})
//     .addMatcher(
//       (action) => action.type.startsWith('i'),
//       (state) => {state.value+=2}
//     )
//     .addMatcher(
//       (action) => action.type.endsWith('t'),
//       (state) => {state.value+=3}
//     )
// })

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('increment', (state) => {state.value++})
//     .addMatcher(
//       (action) => action.type.startsWith('i'),
//       (state) => {state.value+=2}
//     )
//     .addDefaultCase((state, action) => {
//       {state.value--}
//     })
// })


const store = configureStore({ reducer: reducer })

// const store = configureStore({ reducer: reducer ,   devTools: false })


// const addTodo = createAction('test', function prepare(text) {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       createdAt: new Date().toISOString(),
//     },
//   }
// })

// console.log(addTodo('Write more docs'))

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