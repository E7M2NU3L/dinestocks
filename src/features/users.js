import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStart: false,
    loginComplete: false,
    userData: null,
};

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLoginStart: (state) => {
            state.loginStart = true;
        },
        isLoginComplete: (state, action) => {
            state.loginComplete = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.loginComplete = false;
            state.loginStart = false;
            state.userData = null;
        }
    }
});

// Exporting the action creators
export const { isLoginStart, isLoginComplete, logout } = userSlice.actions;

// Exporting the reducer
export const userReducer = userSlice.reducer;
