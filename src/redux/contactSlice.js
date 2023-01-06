import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const contactSlicer = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      action.payload.id = nanoid();
      if (
        state.contacts.find(contacts => contacts.name === action.payload.name)
      ) {
        alert(`${action.payload.name} is alredy in contacts`);
        return;
      }
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      const newContacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      return { contacts: newContacts };
    },
  },
});

export const { addContact, removeContact } = contactSlicer.actions;

// Persist
const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactSlicerPersistedReducer = persistReducer(
  persistConfig,
  contactSlicer.reducer
);
