// SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['search-container']}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className={styles['search-input']}
      />
      <button type="submit" className={styles['search-button']}>
        Search
      </button>
    </form>
  );
};
