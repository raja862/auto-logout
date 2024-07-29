import { createSlice } from "@reduxjs/toolkit";


const mockSlice=createSlice({
    name:"mock",
    initialState:{value:[],isLoading:false},
    reducers:{
        loading:(state,action)=>{
       state.isLoading=true
        },
    fetchData:(state,action)=>{
        state.value=action.payload
        state.isLoading=true
        }
    }
})
export const {loading,fetchData}=mockSlice.actions;
export default mockSlice.reducer;