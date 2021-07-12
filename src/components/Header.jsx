import React, { useState } from 'react';
import Search from './Search';
import useFetch from '../hooks/useFetch';
import Info from './Info';



const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="header-container">
      <h1>IP Address Tracker</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Info searchValue={searchValue}/>
    </div>
  )
}

export default Header
