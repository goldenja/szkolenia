import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {
    increment, selectCount
} from '../features/counter//counterSlice';
import { createSelector } from "@reduxjs/toolkit";


export default function Sample2() {
    const history = useSelector(state => state.counter.history.map(todo => todo.fresh))
    //const history = useSelector(selectSubItems)
    useEffect(() => {
        console.log('render');
    });

    return <div> {history.length} Sample2 <Sample2Child></Sample2Child>  </div>
}


function Sample2Child() {

    const count = useSelector(selectCount);

    const distpatch = useDispatch();

    onclick = () => { distpatch(increment(1)); }


    return <button onClick={onclick}>Increment {count}</button>;



}

// const selectHistoryItems = state => state.counter.history;

// const selectSubItems = createSelector(
//     selectHistoryItems,
//     (items) => {
//         return items.map(todo => todo.fresh);
//     }
// );

//const history = useSelector(selectSubItems)

