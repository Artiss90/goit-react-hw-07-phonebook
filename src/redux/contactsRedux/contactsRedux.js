import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contactsAction';

const {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContact,
  changeFilter,
} = contactsAction;

const itemsRedux = createReducer([], {
  [addContactsSuccess]: (_, { payload }) => {
    /**добавляем новый контакт в в состояние контактов */
    return [..._, payload];
  },

  [deleteContact]: (_, { payload }) =>
    _.filter(contact => contact.id !== payload),
});

const filterRedux = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
});

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
  loading: loadingRedux,
});
