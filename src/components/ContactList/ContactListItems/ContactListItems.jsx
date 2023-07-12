import PropTypes from 'prop-types';
import { ConctactListItem, ContactName, ContactNumber, DeleteButton } from './ContactListItems.styled';

export const ContactListItems = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ConctactListItem>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ConctactListItem>
  );
};

ContactListItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};