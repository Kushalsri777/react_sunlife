import { createSlice } from '@reduxjs/toolkit'

export const authApp = createSlice({
    name:'auth',
    initialState:{
        boolVal:false
    },
    reducers: {
        login :(state)=>{
            state.boolVal = true
        },
        logout :(state)=>{
            state.boolVal = false
        }
    }
})

export const {login, logout} = authApp.actions
export default authApp.reducer