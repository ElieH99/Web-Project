import {createSlice} from "@reduxjs/toolkit"


export const userCounter3= createSlice({
    
    name:"counter3",
    initialState:{  
        value: 0
    },
reducers:{
  
    
        increment3:(state)=>{
            state.value++;
        },
        decrement3:(state)=>{
            state.value--;
        }
    
}
})

export const {increment3, decrement3}=userCounter3.actions;
export const selectCounter3=(state)=>state.counter3;
export default userCounter3.reducer; 