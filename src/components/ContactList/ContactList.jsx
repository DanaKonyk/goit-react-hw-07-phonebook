import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useMemo } from 'react';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const listOfContact = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return listOfContact.length > 0 ? (
    <ul className={css.list}>
      {listOfContact.map(({ name, id, phone }) => (
        <ContactItem key={id} name={name} id={id} phone={phone} />
      ))}
    </ul>
  ) : (
    <p>No contact exists</p>
  );
};

export default ContactList;
