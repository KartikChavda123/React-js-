import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name: "todo",
    initialState: { Students: [] },
    reducers:{
        addData : (state, action)=>{
            state.Students.push(action.payload)
        },
        deleteData: (state , action)=>{
            let data = state.Students.filter((item)=> item.id != action.payload)
            state.Students = data
        }
    }
})

export const {addData , deleteData} = todo.actions
export default todo.reducer