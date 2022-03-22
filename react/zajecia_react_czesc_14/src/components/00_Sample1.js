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

//#4
// const next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

//#5
// function logger(store) {
//   const next = store.dispatch
  
//   return function dispatchAndLog(action) {
//     console.log('dispatching', action.type)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }
// }

// function logger2(store) {
//   const next = store.dispatch

//   return function dispatchAndLog(action) {
//     console.log('dispatching2', action.type)
//     let result = next(action)
//     console.log('next state2', store.getState())
//     return result
//   }
// }

// function applyMiddlewareByMonkeypatching(store, middlewares) {
//   middlewares = middlewares.slice()
//   middlewares.reverse()

//   middlewares.forEach(middleware => { store.dispatch = middleware(store);} )

    
// }

// applyMiddlewareByMonkeypatching(store, [logger, logger2]);


//#6
// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching', action.type)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

// const logger2 = store => next => action => {
//   console.log('dispatching2', action)
//   let result = next(action)
//   console.log('next state2', store.getState())
//   return result
// }

// function applyMiddleware(store, middlewares) {
//   middlewares = middlewares.slice()
//   middlewares.reverse()
//   let dispatch = store.dispatch
//   middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))


//   return Object.assign({}, store, { dispatch })
// }


// store = applyMiddleware(store, [logger, logger2]);

//#7

// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching', action.type)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

// function logger2(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching2', action.type)
//       let result = next(action)
//       console.log('next state2', store.getState())
//       return result
//     }
//   }
// }

//  let store = createStore(reducer , applyMiddleware(logger, logger2));


function Counter() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  //#1
   const clickEvent = () => dispatch(increment());

  //#2
  // const clickEvent = () => { 

  //   console.log('dispatching', increment.type);
  //   dispatch(increment()) 
  //   console.log('next state', store.getState())
  // };

  //#3
  //  const clickEvent = () => { 
  //   dispatchAndLog (store,increment());
  // };

  // function dispatchAndLog(storeParam, action) {
  //   console.log('dispatching', action.type)
  //   storeParam.dispatch(action)
  //   console.log('next state', storeParam.getState())
  // }

  //#4 , #5, #6 , #7 ... / patrz góra
  // const clickEvent = () => dispatch(increment());



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