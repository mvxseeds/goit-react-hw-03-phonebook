import { Component } from "react";
import { ModernNormalize } from "emotion-modern-normalize";
import { GlobalStyle } from "GlobalStyles";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export class App extends Component {
  state = {
    // hardcoded data from task for testing
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
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
