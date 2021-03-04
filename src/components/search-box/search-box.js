import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className='searchbar'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
