import React from 'react';
import Brewery from './Brewery';
import './Brewery.css';

const BrewList = (props) => {
  return (
    <div id='brew-list'>
      {props.breweries.map((item, i) => {
        return <Brewery key={i} item={item} />;
      })}
    </div>
  );
};

export default BrewList;
