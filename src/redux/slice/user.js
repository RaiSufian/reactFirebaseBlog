import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: {},
}

export const UserData = createSlice({
    name: "user",
    initialState,
    reducers: {

        addUser: (state, action) => {
            state.user = action.payload;
        },
        reomveUser: (state) => {
            state.user = {};
        }
    },

});

export const { addUser, reomveUser } = UserData.actions;
export default UserData.reducer;