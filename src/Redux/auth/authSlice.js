import {
  registerThunk,
  logoutThunk,
  loginThunk,
  refreshThunk,
} from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  isLogin: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLogin = true;
        state.error = '';
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.token = null;
        state.user = initialState;
        state.isLoading = false;
        state.isLogin = false;

        state.error = '';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;

        state.isLoading = false;
        state.error = '';
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;

        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
