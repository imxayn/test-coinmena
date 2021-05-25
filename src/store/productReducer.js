import {EDIT_DATA} from './productAction'
import productData from '../productData.json'

const initialState={
    data: {...productData}
}


const productReducer = (state = initialState, action ) => {
    switch(action.type){
        case EDIT_DATA : return {
            ...state,
            updatedData: action.payload
        }
        default:  return state
    }

} 

export default productReducer;