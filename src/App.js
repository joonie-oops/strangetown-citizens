import { useState, useEffect } from 'react';
import './App.css';

import React from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

const App = () => {
  const [citizens, setCitizens] = useState([]);
  const [search, setSearch] = useState('');

  const filteredCitizens = citizens.filter((citizen) =>
    citizen.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setCitizens(users));
  }, []);

  return (
    <div className='App'>
      <h1 className='title'>Strangetown Citizens</h1>
      <SearchBox
        placeholder='Search for citizen!'
        handleChange={handleChange}
      />
      <CardList citizens={filteredCitizens} />
    </div>
  );
};

export default App;
