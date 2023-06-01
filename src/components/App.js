import { Component } from "react";
import { ModernNormalize } from "emotion-modern-normalize";
import { GlobalStyle } from "GlobalStyles";
import { nanoid } from "nanoid";

import contacts from "../data/contacts.json";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export class App extends Component {
  state = {
    // hardcoded data from task for testing
    contacts: [ ...contacts ],
    filter: "",
  };
  
  
  componentDidMount() {
	const contacts = localStorage.getItem('contacts');
	const parsedContacts = JSON.parse(contacts);
	
	if (parsedContacts) {
		this.setState({ contacts: parsedContacts });
	}
	
  };
  
  componentDidUpdate(prevProps, prevState) {
	if (this.state.contacts !== prevState.contacts) {
	  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	}
  };


  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(8),
      name,
      number,
    };

    const isDuplicate = contacts
      .map((contact) => contact.name)
      .includes(newContact.name);

    !isDuplicate
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }))
      : alert(`${newContact.name} is already in contacts.`);
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          onChange={(e) => this.setState({ filter: e.target.value })}
          value={filter}
        />

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />

        <ModernNormalize />
        <GlobalStyle />
      </div>
    );
  }
}
