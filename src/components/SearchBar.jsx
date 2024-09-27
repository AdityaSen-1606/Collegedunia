import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search college"
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;
