import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {
    increment, selectCount
} from '../features/counter/counterSlice';
import { createSelector } from "@reduxjs/toolkit";


const selectHistory = state => state.counter.history

const selectFreshHistory = createSelector([selectHistory], todos => { return todos.filter(todo => !todo.fresh) }
)

const selectFreshHistoryDates = createSelector(
    [selectFreshHistory],
    completedTodos => completedTodos.map(todo => todo.date)
)

export default function Sample4() {
    const history = useSelector(selectFreshHistoryDates);

    useEffect(() => {
        console.log('render');
    });

    return <div> {history.length}Sample4  </div>
}


