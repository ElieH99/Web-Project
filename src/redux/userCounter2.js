import {createSlice} from "@reduxjs/toolkit"


export const userCounter2= createSlice({
    
    name:"counter2",
    initialState:{  
        value: 0
    },
reducers:{
    
        increment2:(state)=>{
            state.value++;
        },
        decrement2:(state)=>{
            state.value--;
        }
    
}
})

export const {increment2, decrement2}=userCounter2.actions;
export const selectCounter2=(state)=>state.counter2;
export default userCounter2.reducer; 