import { GlobalStyle } from 'components/GlobalStyle';
import React, { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, SecondTitle } from './App.styled';

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

  addContact = (name, number) => {
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

    return <Box margin="50px auto 50px" padding="30px" width="500px" height="100%" border="normal" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" borderRadius="15px" backgroundColor="bgTable">
      <GlobalStyle/>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={this.addContact}/>
      <SecondTitle>Contacts</SecondTitle>
      <Filter text="Find contacts by name" onChange={this.changeFilter} />
      <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact}/>
    </Box>
};
};