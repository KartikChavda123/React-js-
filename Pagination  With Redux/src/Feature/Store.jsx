import { configureStore } from "@reduxjs/toolkit";
import  Api from "./Slice";



export const store = configureStore({
    reducer : {
        apiKey : Api,
    }
})