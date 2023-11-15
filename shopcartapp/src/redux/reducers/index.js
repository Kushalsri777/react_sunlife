import { combineReducers } from 'redux'
import { selectedProductReducer, productReducer} from './productReducer'

const rootReducer = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default rootReducer