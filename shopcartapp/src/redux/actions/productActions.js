// import axios from "axios"
import { ActionTypes } from "../constants/action-type"
import fakeStoreApi from "../../apis/fakeStoreApi";

export const setProducts = (products)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product)=>{
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const fetchProducts=()=>async(dispatch)=>{
        const response=await fakeStoreApi('/products')
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })
}

export const fetchDetails=(id)=>async(dispatch)=>{
    const response=await fakeStoreApi(`/products/${id}`)
    dispatch({
        type:ActionTypes.SELECTED_PRODUCT,
        payload:response.data
    })
}