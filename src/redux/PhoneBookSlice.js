import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};


export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: {
    [register.fulfilled] (state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }
  }
});



