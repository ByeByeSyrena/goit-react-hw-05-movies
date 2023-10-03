import React, { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
