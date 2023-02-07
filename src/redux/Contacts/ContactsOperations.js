import axios from 'axios';
import { fetchContactsApi, addContactApi, deleteContactApi } from './ContactsSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAll = () => async dispatch => {
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsApi(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const addContact = contact => async dispatch => {
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactApi(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = id => async dispatch => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactApi(data));
  } catch (error) {
    console.log(error);
  }
};
