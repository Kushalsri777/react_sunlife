import { createSlice } from '@reduxjs/toolkit'

export const counterApp = createSlice({
    name:'counter',
    initialState:{
        counter:10
    },
    reducers: {
        increment :(state)=>{
            state.counter += 1
        },
        decrement :(state)=>{
            state.counter -= 1
        },
        reset :(state)=>{
            state.counter = 0
        }
    }
})

export const {increment, decrement, reset} = counterApp.actions
export default counterApp.reducer