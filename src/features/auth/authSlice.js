import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    token: null,
    isAdmin: false,
    isManager: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAdmin = action.payload.isAdmin;
            state.isManager = action.payload.isManager;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload.error;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
            state.isAdmin = false;
            state.isManager = false;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
