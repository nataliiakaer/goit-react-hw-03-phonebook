import React from 'react';
import PropTypes from 'prop-types';
import CItem from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={CItem.contactItem}>
      <div className={CItem.contactContainer}>
        {contact.name}: {contact.number}
      </div>
      <button
        type="button"
        className={CItem.btnDelete}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
