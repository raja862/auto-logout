import { configureStore } from "@reduxjs/toolkit"; 

import mockReducer from "./mockSlice";


export const store=configureStore({
    reducer:{
        mockAPIReducer:mockReducer
    }
})