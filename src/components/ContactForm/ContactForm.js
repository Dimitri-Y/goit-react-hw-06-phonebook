import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      name: name,
      number: number,
      id: nanoid(),
    };

    onSubmit(contactData);
    setName('');
    setNumber('');
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
              value={name}
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
              value={number}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
