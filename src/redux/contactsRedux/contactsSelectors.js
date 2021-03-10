const getContactsFilter = state => state.contacts.filter;
const getContactsItems = state => state.contacts.items;
const getContactsLoading = state => state.contacts.loading;
const getContactsError = state => state.contacts.error;

const getVisibleFilterContacts = state => {
  const normalizedFilter = getContactsFilter(state).toLowerCase();
  const contacts = getContactsItems(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContactsFilter,
  getContactsItems,
  getContactsLoading,
  getContactsError,
  getVisibleFilterContacts,
};
