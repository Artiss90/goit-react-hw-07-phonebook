import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

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

const deleteContact = createAction('contacts/delete_contact');

const changeFilter = createAction('contacts/change_filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContact,
  changeFilter,
};
