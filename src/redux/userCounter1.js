import {createSlice} from "@reduxjs/toolkit"


export const userCounter1= createSlice({
    
    name:"counter1",
    initialState:{  
        value: 0
    },
reducers:{
    
        increment1:(state)=>{
            state.value++;
        },
        decrement1:(state)=>{
            state.value--;
        }
    
}
})

export const {increment1, decrement1}=userCounter1.actions;
export const selectCounter1=(state)=>state.counter1;
export default userCounter1.reducer; 