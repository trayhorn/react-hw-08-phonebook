import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContact,
  deleteContact
} from './ContactsOperations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    theme: 'light'
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
  extraReducers: {
    [fetchAllContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setFilter, toggleTheme } = ContactsSlice.actions;
