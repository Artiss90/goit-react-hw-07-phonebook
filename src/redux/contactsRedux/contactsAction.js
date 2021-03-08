import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

// const addContact = createAction('contacts/add_contact', ({ name, number }) => {
//   return {
//     payload: {
//       /**создаём новый контакт и присвоим ему ID  */
//       id: uuidv4(),
//       name: name,
//       number: number,
//     },
//   };
// });

const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactsError = createAction('contacts/deleteContactsError');

// const deleteContact = createAction('contacts/delete_contact');

// const changeFilterRequest = createAction('contacts/changeFilterRequest');
// const changeFilterSuccess = createAction('contacts/changeFilterSuccess');
// const changeFilterError = createAction('contacts/changeFilterError');

const changeFilter = createAction('contacts/change_filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
};
