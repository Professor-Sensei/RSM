import { useContext, useState, useEffect } from 'react';

import { AppContext } from '../App';

const SearchBar = () => {
  const { setCity } = useContext(AppContext);
  const [search, setSearch] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search?.length >= 3) {
      setCity(search);
    }
  }, [search]);

  return (
    <>
      <div>Enter City to Search Breweries:</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(search);
        }}
      >
        <input
          placeholder='Search a City'
          type='text'
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
    </>
  );
};

export default SearchBar;
