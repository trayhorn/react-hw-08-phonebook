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
    filter: ''
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
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

export const { setFilter } = ContactsSlice.actions;
