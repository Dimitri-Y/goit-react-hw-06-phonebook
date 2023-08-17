import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().positive().integer().required(),
});

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        userSchema.name = value;
        break;
      case 'number':
        userSchema.number = value;
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name: valueName, number } = userSchema;

    let isExist = contacts.some(
      ({ name }) => name.toLowerCase() === valueName.toLowerCase()
    );
    if (isExist) {
      alert(`${valueName} is already in contacts.`);
      return;
    }

    dispatch(addContact(valueName, number));
  };

  return (
    <div className={css['']}>
      <h2>Name</h2>
      <form onSubmit={handleSubmit} className={css['form']}>
        <ul>
          <li>
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={userSchema.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={userSchema.number}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
