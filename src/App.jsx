import './App.css';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';

export const AppContext = createContext(null);

const App = () => {
  const [city, setCity] = useState('');
  const [breweries, setBreweries] = useState(null);

  useEffect(() => {
    console.log('city: ', city);
    axios
      .get('/breweries', { params: { city: city } })
      .then((response) => {
        setBreweries(response.data);
        console.log(response);
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
        <BrewList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
