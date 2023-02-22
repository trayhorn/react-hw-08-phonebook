import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContact,
  deleteContact,
  editContact
} from './ContactsOperations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    editId: null
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    getIdToEdit: (state, action) => {
      state.editId = action.payload;
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
    [editContact.fulfilled](state, action) {
      const id = action.payload.id;
      const name = action.payload.name;
      const number = action.payload.number;
      state.contacts = state.contacts.map(contact =>
        contact.id === action.payload.id ? {id, name, number} : contact
      );
    }
  },
});

export const { setFilter, getIdToEdit } = ContactsSlice.actions;
