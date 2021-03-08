import axios from 'axios';
import contactsAction from './contactsAction';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContact = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const addContact = text => dispatch => {
  const contact = {
    /**создаём новый контакт (присвоим ему ID на бекенде) */
    name: text.name,
    number: text.number,
  };

  dispatch(contactsAction.addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsAction.addContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.addContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsAction.deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactsSuccess(id)))
    .catch(error => dispatch(contactsAction.deleteContactsError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContact };
