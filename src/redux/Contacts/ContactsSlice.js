import { createSlice } from '@reduxjs/toolkit';

export const ContactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsApi(state, action) {
      state.contacts = action.payload;
    },
    addContactApi(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContactApi(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const {
  fetchContactsApi,
  addContactApi,
  deleteContactApi,
} = ContactsSlice.actions;
