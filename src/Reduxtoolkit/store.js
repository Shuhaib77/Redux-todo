import { configureStore } from "@reduxjs/toolkit";
import Todovalue from "./Todovalue";

const store=configureStore({
    reducer:{
        todoval:Todovalue

    }
})

export default store