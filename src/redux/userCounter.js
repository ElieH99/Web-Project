import {createSlice} from "@reduxjs/toolkit"


export const userCounter= createSlice({
    
    name:"counter",
    initialState:{  
        valeur: 0
    },
reducers:{


        increment:(state)=>{
            state.valeur++;
        },
        decrement:(state)=>{
            state.valeur--;
        }
    
}
})

export const {increment, decrement}=userCounter.actions;
export const selectCounter=(state)=>state.counter;
export default userCounter.reducer; 