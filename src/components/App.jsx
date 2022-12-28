import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  function addContact({ name, number }) {
    const contact = contacts.find(contact => contact.name === name);

    if (contact) {
      alert(`${name} is already in contacts.`);

      return;
    }

    const newContact = { id: nanoid(), name, number };

    setContacts(prevState => {
      return [...prevState, newContact];
    });
  }

  function updateFilter(value) {
    setFilter(value);
  }

  function filterContacts() {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }

  function deleteContact(id) {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={updateFilter}></Filter>
        <ContactsList
          contacts={filterContacts()}
          onDelete={deleteContact}
        ></ContactsList>
      </Container>
    </>
  );
}
