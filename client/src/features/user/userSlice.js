import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  username: "Guest",
  phoneNo: 0,
  address: "",
  email: "",
  jwtToken: "",
};
const loadInitialStateFromStorage = () => {
  const storedState = localStorage.getItem("user");
  return storedState ? JSON.parse(storedState) : initialState;
};
const userSlice = createSlice({
  name: "user",
  initialState: loadInitialStateFromStorage(),
  reducers: {
    updateUser(state, action) {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.phoneNo = action.payload.phoneNo;
      state.address = action.payload.address;
      state.email = action.payload.email;
    },
    updateJwtToken(state, action) {
      state.jwtToken = action.payload;
    },
  },
});

export const { updateUser, updateJwtToken } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (store) => store.user;
