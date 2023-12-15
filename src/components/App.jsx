import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectContacts, getError, getIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const listOfContacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
