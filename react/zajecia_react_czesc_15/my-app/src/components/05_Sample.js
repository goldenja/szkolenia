import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {
    increment, selectCount
} from '../features/counter/counterSlice';
import { createSelector } from "@reduxjs/toolkit";


const makeSelectItemsByCategory = () => {
    const selectItemsByCategory = createSelector(
        [state => state.items, (state, category) => category],
        (items, category) => items.filter(item => item.category === category)
    )
    return selectItemsByCategory
}


export default function Sample5() {

    const selectItemsByCategory = useMemo(makeSelectItemsByCategory, [])

    const itemsByCategory = useSelector(state =>
        selectItemsByCategory(state, category)
    )

    return <div> {history.length}Sample5  </div>
}


