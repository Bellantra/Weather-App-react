import React from 'react';
import Card from '../Card/Card';
import s from './Cards.module.css'

export default function Cards({cities,onClose}) {
  
  if(!cities){
    return <h1>No hay ciudades disponibles</h1>
  }
 
  return (
  <div className={s.container}>
    { 
      cities.map(city => (
        <Card
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}  
          id={city.id}        
        />
      ) )
    }
  </div>
  )};