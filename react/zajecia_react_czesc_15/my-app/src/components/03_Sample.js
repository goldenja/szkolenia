import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {
    increment, selectCount
} from '../features/counter/counterSlice';
import { createSelector } from "@reduxjs/toolkit";


const selectItemId = (state, itemId) => itemId

const selectItems = state => state.counter.history

const selectOtherField = (state, someObject) => {
    debugger;
    return someObject.asddsa + 1
}

const selectItemById = createSelector(
    [selectItems, selectItemId, selectOtherField],
    (items, itemId, someField) => items
)


export default function Sample3() {
    const history = useSelector(state => selectItemById(state, 42));

    useEffect(() => {
        console.log('render');
    });

    return <div> {history.length}Sample3  </div>
}


