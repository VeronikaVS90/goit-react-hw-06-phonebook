import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';
import { ContactListItems } from './ContactListItems/ContactListItems';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactListItems
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};