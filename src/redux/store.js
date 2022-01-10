import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlicer";
import  userCounter  from "./userCounter";
import userCounter1 from "./userCounter1";
import userCounter2 from "./userCounter2";
import userCounter3 from "./userCounter3";
import userCounter4 from "./userCounter4";
import userEdit from "./userEdit";

export default configureStore({
    reducer:{
        user: userReducer,
        editU:userEdit,
        counter:userCounter,
        counter1:userCounter1,
        counter2:userCounter2,
        counter3:userCounter3,
        counter4:userCounter4,
        
    },
});




