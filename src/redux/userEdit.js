import {createSlice} from "@reduxjs/toolkit"

export const userEdit= createSlice({
    name:"editU",
  
    initialState:{
        editU:null,
        
    },
    reducers:{
        save:(state,action)=>{
            state.editU=action.payload;
        },
        logout1:(state)=>{
            state.editU=null;
        }
    }
})




export const {save, logout1}=userEdit.actions;
export const selectEditUser=(state)=>state.editU.editU;
export default userEdit.reducer; 
