import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
    if (contacts.length === 0) {
    return <p className={css.noContacts}>No contacts to display.</p>;
    }

    return (
    <div className={css.wraperContactList}>
        <ul className={css.contactList}>
        {contacts.map(contact => (
            <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDelete(contact.id)}
            >
                Delete
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
),
        handleDelete: PropTypes.func.isRequired,
};