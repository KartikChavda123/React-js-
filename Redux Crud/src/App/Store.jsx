import { configureStore } from "@reduxjs/toolkit";
import  todo  from "../feature/TodoSlice";



export const store = configureStore({
    reducer : {
        todokey : todo
    }
});