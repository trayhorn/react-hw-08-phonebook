import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './Auth/AuthSlice';
import { ContactsSlice } from './Contacts/ContactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    contacts: ContactsSlice.reducer
  },
});

setupListeners(store.dispatch);
