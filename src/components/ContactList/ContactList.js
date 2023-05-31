import { List, ListItem } from "./ContactList.styled";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {contacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}
              <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </ListItem>
          );
        })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
