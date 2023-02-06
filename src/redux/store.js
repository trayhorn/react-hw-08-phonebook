import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './AuthSlice';
import { phonebookApi } from './ContactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});

setupListeners(store.dispatch);
