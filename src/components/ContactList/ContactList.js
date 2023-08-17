import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const countVisibleContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = countVisibleContacts();
  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css['group']}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css['list']}>
          <p className={css['p']}>
            {contact.name} : {contact.number}
          </p>
          <button
            className={css['button']}
            id={contact.id}
            onClick={handleDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
