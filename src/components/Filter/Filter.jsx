import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChange }) => (
    <div className={css.conteiner}>
    <label className={css.filterLabel} htmlFor="filterInput">
        Find contacts by Name
    </label>
    <input
        id="filterInput"
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
        aria-label="Filter contacts by name"
    />
    </div>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};