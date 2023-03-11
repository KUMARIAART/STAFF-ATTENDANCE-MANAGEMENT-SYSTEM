import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        value:{
            username:"",
            email:"",
            password:""
        }
    },
        reducers:{
            login:(state, action)=>{
                state.value=action.payload
            }
        }
    
})

export default userSlice.reducer
export const {login}=userSlice.actions
