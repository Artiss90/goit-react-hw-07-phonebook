import axios from 'axios';
import contactsAction from './contactsAction';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = text => dispatch => {
  const contact = {
    /**создаём новый контакт (присвоим ему ID на бекенде) */
    name: text.name,
    number: text.number,
  };

  dispatch(contactsAction.addContactsRequest);
  axios
    .post('/contacts', contact)
    // .then(response => {
    //   console.log(response.data);
    //   return response;
    // })
    .then(({ data }) => dispatch(contactsAction.addContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.addContactsError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact };
