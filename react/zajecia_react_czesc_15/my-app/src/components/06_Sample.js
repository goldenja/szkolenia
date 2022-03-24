import { makeSelectItemsByCategory } from './categoriesSlice'

const makeMapState = (state, ownProps) => {
    // Closure - create a new unique selector instance here,
    // and this will run once for every component instance
    const selectItemsByCategory = makeSelectItemsByCategory()

    const realMapState = (state, ownProps) => {
        return {
            itemsByCategory: selectItemsByCategory(state, ownProps.category)
        }
    }

    // Returning a function here will tell `connect` to use it as
    // `mapState` instead of the original one given to `connect`
    return realMapState
}

export default connect(makeMapState)(CategoryList)