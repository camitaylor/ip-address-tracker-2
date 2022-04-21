import React, { useState } from 'react';

const Search = ({searchValue, setSearchValue}) => {
  const [value, setValue] = useState(searchValue);

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value);
  }

  return (
    <div>
      <form id="search" onSubmit={onFormSubmit}>
        <div>
          <input
            onChange={handleSearchInputChange}
            className="search"
            name="search"
            type="search"
            value={value}
            placeholder="Search for any IP address or domain">
          </input>
          <button className="btn">&gt;</button>
        </div>
      </form>
    </div>
  )
}

export default Search;

