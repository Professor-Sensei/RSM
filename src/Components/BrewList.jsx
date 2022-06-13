import React from 'react';
import Brewery from './Brewery';

const BrewList = (props) => {
  return (
    <div>
      {props.breweries.map((item, i) => {
        return <Brewery key={i} item={item} />;
      })}
    </div>
  );
};

export default BrewList;
