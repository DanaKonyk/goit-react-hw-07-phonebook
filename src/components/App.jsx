import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts, getError, getIsLoading } from '../redux/selectors';

export const App = () => {
  const listOfContacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && !error ? (
        <p>Loading...</p>
      ) : (
        <>
          {listOfContacts && listOfContacts.length > 0 ? (
            <>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>Your contact list is empty</p>
          )}
        </>
      )}
    </div>
  );
};
