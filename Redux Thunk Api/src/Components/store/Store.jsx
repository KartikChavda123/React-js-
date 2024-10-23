import { configureStore } from "@reduxjs/toolkit";
import Api from "../features/ThunkSlice";


export const store = configureStore({
    reducer:{
        apiKey: Api,
    }
})