import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contactsAction';

const itemsRedux = createReducer([], {
  [contactsAction.addContactsSuccess]: (_, { payload }) => {
    /**добавляем новый контакт в в состояние контактов */
    return [..._, payload];
  },

  [contactsAction.deleteContact]: (_, { payload }) =>
    _.filter(contact => contact.id !== payload),
});

const filterRedux = createReducer('', {
  [contactsAction.changeFilter]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [contactsAction.addContactsRequest]: () => true,
  [contactsAction.addContactsSuccess]: () => false,
  [contactsAction.addContactsError]: () => false,
});

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
  loading: loadingRedux,
});
