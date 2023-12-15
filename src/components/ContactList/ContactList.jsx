import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length > 0 ? (
    <ul className={css.list}>
      {contacts.map(({ name, id, phone }) => (
        <ContactItem key={id} name={name} id={id} phone={phone} />
      ))}
    </ul>
  ) : (
    <p>No contact exists</p>
  );
};

export default ContactList;
