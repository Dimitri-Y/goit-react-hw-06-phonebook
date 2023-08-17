import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(nameInput, number) {
        return {
          payload: {
            id: nanoid(),
            name: nameInput,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;