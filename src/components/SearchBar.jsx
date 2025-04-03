import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProfiles } from '../redux/actions'; // Import your action

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Dispatch the filter action with the search term
    dispatch(filterProfiles(value));
  };

  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;