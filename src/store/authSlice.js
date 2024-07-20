// Store for authentication
import { createSlice } from '@reduxjs/toolkit'
import { fetchUser } from '../utils/fetchLocalStorageData.js'

const user = fetchUser();

const initialState = {
    status : user? true: false, // to check authentication : default value should be false
    userData : user, // initially no user, hence null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.status = true,
            state.userData = action.payload
        },
        logout : (state) => {
            state.status = false,
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer