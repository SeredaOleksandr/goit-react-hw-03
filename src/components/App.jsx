import { useState } from 'react';
import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactData from '../contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactData);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactsId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactsId);
    });
  };

  const handleSearchChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleSearchChange} />
      <ContactList
        contacts={(contacts, filteredContacts())}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
