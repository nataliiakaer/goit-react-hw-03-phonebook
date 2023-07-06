import ContactListItem from 'components/ContactListItem';
import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import CList from './ContactList.module.css';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul className={CList.contactsList}>
      {list.map(item => {
        return (
          <ContactListItem
            key={nanoid()}
            contact={item}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
