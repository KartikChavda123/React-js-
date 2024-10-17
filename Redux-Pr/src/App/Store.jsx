import { configureStore } from "@reduxjs/toolkit";
import  todo from "../Feture/Taskslice";


export const store = configureStore({
    reducer : {
        todokey: todo
    }
});