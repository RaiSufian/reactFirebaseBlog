import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false
}
export const loader = createSlice({
    name: "loading",
    initialState,
    reducers: {
        startLoading: (state) => {
          console.log("loader start")
            state.loading = true
        },
        endLoading: (state) => {
           console.log("loader end")
            state.loading = false
        },
    }

})

export const { startLoading, endLoading } = loader.actions;
export default loader.reducer;