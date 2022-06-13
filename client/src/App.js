// import logo from './logo.svg';
import './App.css';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';

export const AppContext = createContext(null);

const App = () => {
  const [city, setCity] = useState('las vegas');
  const [breweries, setBreweries] = useState(null);

  useEffect(() => {
    axios
      .get('/breweries')
      .then((response) => {
        setBreweries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <AppContext.Provider value={{ city, setCity }}>
      <div className='App'>
        {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header> */}
        <h1>Brewery Lister</h1>
        <SearchBar />
      </div>
    </AppContext.Provider>
  );
};

export default App;
