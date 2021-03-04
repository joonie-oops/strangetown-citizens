import React from 'react';
import './card.styles.css';

const Card = ({ citizen }) => {
  return (
    <div className='card'>
      <img
        src={`https://robohash.org/${citizen.id}?set=set5&size=180x180`}
        alt='Person'
      />
      <h2>{citizen.name}</h2>
      <p>{citizen.company.bs}</p>
    </div>
  );
};

export default Card;
