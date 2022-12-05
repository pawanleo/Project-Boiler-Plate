import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
export interface User {
  username: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  status?: string;
  currentUser?: User;
  error: string | undefined;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: "",
  currentUser: undefined,
  error: "",
};
export const login = createAsyncThunk("auth/login", async (body) => {
  const response = await makeRequest("post", "", body);
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginData(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Actions
export const { loginData } = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
