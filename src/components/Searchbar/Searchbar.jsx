import PropTypes from 'prop-types';
import { useState } from 'react';

const INITIAL_STATE = {
  query: '',
};

export const Searchbar = props => {
  const [query, setQuery] = useState('');
  const handlerChange = e => {
    const { value } = e.target;
    setQuery(value);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    props.submit(query);
    setQuery(INITIAL_STATE.query);
  };

  return (
    <header className="Searchbar" onSubmit={e => handlerSubmit(e)}>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={query}
          onInput={e => handlerChange(e)}
          name="query"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};
