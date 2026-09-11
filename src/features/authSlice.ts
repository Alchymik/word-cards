import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ login: string; password: string }>) {
      if (action.payload.login === 'admin' && action.payload.password === 'admin') {
        state.isAuthenticated = true;
        state.user = 'admin';
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.user = null;
        state.error = 'Вход невозможен: неправильные логин или пароль';
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;