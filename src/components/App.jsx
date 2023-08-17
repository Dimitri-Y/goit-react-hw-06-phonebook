import  ContactForm  from './ContactForm/ContactForm';
import  Filter  from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import  {useSelector}  from 'react-redux';
import css from "./App.module.css";

const App = () =>
{
  const contacts = useSelector(state => state.contacts.contacts);

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
          padding:'16px',
        }}
      >
      <ContactForm  ></ContactForm>
      {contacts.length !== 0 &&<h2 className={css["h"]}> Contacts </h2>}
      {<Filter ></Filter>}
      {<ContactList></ContactList>}
      </div>
    );
}

export default App;
