import {createSlice} from "@reduxjs/toolkit"


export const userCounter4= createSlice({
    
    name:"counter4",
    initialState:{  
        value: 0
    },
reducers:{
 
        increment4:(state)=>{
            state.value++;
        },
        decrement4:(state)=>{
            state.value--;
        }
    
}
})

export const {increment4, decrement4}=userCounter4.actions;
export const selectCounter4=(state)=>state.counter4;
export default userCounter4.reducer; 