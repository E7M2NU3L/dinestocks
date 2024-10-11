import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData : null,
}

export const RegisteredUserState = createSlice({
    name : 'reg_user',
    initialState,
    reducers : {
        setRegUser : (state, action) => {
            state.userData = action.payload
        },
        deleteRegUser : (state) => {
            state.userData = null
        }
    }
});

export const {setRegUser, deleteRegUser} = RegisteredUserState.actions
export const RegUser = RegisteredUserState.reducer;