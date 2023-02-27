import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'addUser',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        deleteTodo(state) {
            state.pop()
        }
    }
})

export const { addUser,deleteTodo } =  userSlice.actions
export default userSlice.reducer