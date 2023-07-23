import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!this.isValidName(name) || !this.isValidNumber(number)) {
        alert("Please provide a valid name and phone number.");
        return;
    }

    this.props.handleSubmit({ name, number });
    this.setState({ name: '', number: '' });
};

    isValidName = name => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return nameRegex.test(name);
    };

    isValidNumber = number => {
    const numberRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return numberRegex.test(number);
    };


    render() {
    const { name, number } = this.state;

    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>Name </label>
        <input
            className={css.formName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
        />
        <label className={css.formLabel}>Number </label>
        <input
            className={css.formNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
        />
        <button className={css.formBtn} type="submit">
            Add contact
        </button>
        </form>
    );
    }
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};