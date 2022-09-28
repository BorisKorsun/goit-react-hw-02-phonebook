import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  onAddContact = (values, { resetForm }) => {
    const { name, number } = values;
    
    this.setState(({ contacts }) => {
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} is already in contact`)
      } else
      return { contacts: [{ id: nanoid(), name, number}, ...contacts], }
    })
    resetForm();
  };

  contactDelete = (id) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    });
  }

  onFilterChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({filter: value})
  }

  getVisibleContacts = () => {
    const normalisedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalisedFilter)
    });
    return visibleContacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onAddContact}
          options={{name: '', number: ''}}
        />

        <h2>Contacts</h2>
        <Filter
        onChange={this.onFilterChange}
        />
          <ContactList
          contacts={this.getVisibleContacts()}
          onDelete={this.contactDelete}
          />
      </div>
    )
  };
};

export default App;