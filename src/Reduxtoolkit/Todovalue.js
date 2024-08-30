import { createSlice } from "@reduxjs/toolkit";


const initialState={
    input:"",
    todo:[]

}

const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        Inputss:(state,action)=>{
            state.input=action.payload


        },
        addtodos:(state,action)=>{
            state.todo=[...state.todo,state.input]
        }
    }
})

export const {Inputss,addtodos}=TodoSlice.actions
export default TodoSlice.reducer