import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    //
  }
})

export const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    //
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    console.log(data);
    return data.id;
  } catch (error) {
    //
  }
})

