import './App.css';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import BrewList from './Components/BrewList';

export const AppContext = createContext(null);

const App = () => {
  const [city, setCity] = useState('');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    axios
      .get('/breweries', { params: { city: city } })
      .then((response) => {
        setBreweries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <AppContext.Provider value={{ city, setCity }}>
      <div className='App'>
        <h1>Brewery Lister</h1>
        <SearchBar />
        <BrewList breweries={breweries} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
