import React from 'react';
import Card from '../card/card';
import './card-list.styles.css';

export const CardList = ({ citizens }) => {
  return (
    <div className='card-list'>
      {citizens.map((citizen) => (
        <Card key={citizen.id} citizen={citizen} />
      ))}
    </div>
  );
};
