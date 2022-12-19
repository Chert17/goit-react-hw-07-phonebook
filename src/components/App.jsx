import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contactsParse = JSON.parse(localStorage.getItem('contacts'));

    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = contacts.find(contact => contact.name === name);

    // Show warrning if contact is already in contacts
    if (contact) {
      alert(`${name} is already in contacts.`);

      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter } = this.state;
    const normalizeFilter = filter.trim().toLowerCase();

    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact}></ContactForm>
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            onChange={this.updateFilter}
          ></Filter>
          <ContactsList
            contacts={this.filterContacts()}
            onDelete={this.deleteContact}
          ></ContactsList>
        </Container>
      </>
    );
  }
}
