import { createSlice } from "@reduxjs/toolkit";

let initialState={
    authenticated:false,
    userData:null
}
let storeSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.authenticated=true
            state.userData=action.payload.userData
        },
        logout:(state)=>{
            state.authenticated=false,
            state.userData=null
        }
    }
}
)

export let {login,logout}=storeSlice.actions
export default storeSlice.reducer