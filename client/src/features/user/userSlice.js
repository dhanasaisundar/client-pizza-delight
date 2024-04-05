import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: "",
  phoneNo: 0,
  address: "",
  password: "",
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
    updateCreds(state, action) {
      state.name = action.payload.userName;
      state.phoneNo = action.payload.phoneNo;
    },
    updateUser(state, action) {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
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

export const { updateCreds, updateUser, updateJwtToken } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (store) => store.user;
