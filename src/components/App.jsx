import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (contactData) => {
    const { name, number } = contactData;
    const id = nanoid();
    const contactsList = [...this.state.contacts];

    const lowerCaseName = name.toLowerCase();

    if (contactsList.some((contact) => contact.name.toLowerCase() === lowerCaseName)) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsList.push({ name, id, number });
    }

    this.setState({ contacts: contactsList });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, name, number } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        {this.state.contacts.length === 0 ? (
          <p>No contacts to display.</p>
        ) : (
          <ContactList
            contacts={this.getFilteredContacts()}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}