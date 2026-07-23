import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './storeSlice'
let store=configureStore({
    reducer:storeReducer
})
export {store}