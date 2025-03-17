import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./DataUsers";

const userSlice = createSlice({
  name: "user",
  initialState: usersList,
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
    removeUser(state, action) {
      const {id} = action.payload
      const uu = state.find(user => user.id === id)
      if(uu) {
        return state.filter(user => user.id !== id)
      }
    }
  }
})

export const {addUser, removeUser} =  userSlice.actions;
export default userSlice.reducer;