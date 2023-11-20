import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterRedux'
import authReducer from './authRedux'

export default  configureStore({
    reducer :{
        acounter:counterReducer,
        loginLogout:authReducer
    }
})