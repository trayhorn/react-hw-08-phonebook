import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './PhoneBookSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
  },
});

