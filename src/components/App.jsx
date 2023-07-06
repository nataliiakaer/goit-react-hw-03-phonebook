import React, { Component, Fragment } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.number,
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactFormSubmit = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(constact =>
      constact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilterContacts();

    return (
      <Fragment>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactFormSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilter} />
        <ContactList
          list={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}
