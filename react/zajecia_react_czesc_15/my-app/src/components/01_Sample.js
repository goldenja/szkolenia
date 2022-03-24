import { useSelector } from "react-redux"


const selectStatus = state => state.counter.status

// Arrow function, direct lookup
const selectEntities = state => state.entities

// Function declaration, mapping over an array to derive values
function selectItemIds(state) {
    return state.items.map(item => item.id)
}

// Function declaration, encapsulating a deep lookup
function selectSomeSpecificField(state) {
    return state.some.deeply.nested.field
}

// Arrow function, deriving values from an array
const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
    items.filter(item => item.name.startsWith(namePrefix))


export default function Sample1() {
    const status = useSelector(selectStatus)

    return <div> {status} Sample1</div>
}