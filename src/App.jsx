import './App.css';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';

export const AppContext = createContext(null);

const App = () => {
  const [city, setCity] = useState('');
  const [breweries, setBreweries] = useState(null);

  useEffect(() => {
    axios
      .get('/breweries', { params: { city: city } })
      .then((response) => {
        console.log(city);
        console.log(response.data);
        setBreweries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <AppContext.Provider value={{ city, setCity, breweries }}>
      <div className='App'>
        <h1>Brewery Lister</h1>
        <SearchBar />
      </div>
    </AppContext.Provider>
  );
};

export default App;
