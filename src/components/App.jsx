import { GlobalStyle } from 'components/GlobalStyle';
import React, { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  addedContact = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`Sorry, but ${name} is already in contacts!`)
      return;
    }
    const newContact = {
        id: nanoid(),
        name,
        number,
    };
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    e.target.reset();
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter)
    })

    return <Box margin="50px auto 50px" padding="30px" width="500px" height="500px" border="normal">
      <GlobalStyle/>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addedContact}/>
      <h2>Contacts</h2>
      <Filter text="Find contacts by name" onChange={this.changeFilter} />
      <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact}/>
    </Box>
};
};