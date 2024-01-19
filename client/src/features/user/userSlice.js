import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: "",
  address: "",
  password: "",
  phone_no: 0,
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
    updateName(state, action) {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.phone_no = action.payload.phone_no;
      state.address = action.payload.address;
      state.email = action.payload.email;
    },
    updateJwtToken(state, action) {
      state.jwtToken = action.payload;
    },
  },
});

export const { updateName, updateJwtToken } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (store) => store.user;
