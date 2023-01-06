// import { useState } from 'react';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Container>
    </>
  );
}
