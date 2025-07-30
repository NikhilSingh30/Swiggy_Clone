import {configureStore} from  "@reduxjs/toolkit"
import cartRedcer from "./cartSlice"
const appStore = configureStore({
    reducer : {
        cart : cartRedcer
    }
})

export default appStore;