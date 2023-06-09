import { configureStore } from '@reduxjs/toolkit';
import { ponebookReducer } from './phoneSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    phone: ponebookReducer,
    auth: authReducer,
  },
});
