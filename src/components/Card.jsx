import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';



export default function Card({min, max, name, img, id, onClose}) { //Preguntar porque {cities,onClose}
  // acá va tu código

  return (<div className={styles.card}>
    <div className={styles.card1}>
      <button className={styles.button} onClick={onClose}>x</button>
      <h5>{name}</h5>
    </div>    
    <div>
      <div className={styles.datos}>
        <div>
          <h6>Min</h6>
          <h6>{min}º</h6>
        </div>
        <div>
          <h6>Max</h6>
          <h6>{max}º</h6>
        </div>         
      </div>      
      <img className={styles.img} src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen'  />
      <Link to={`/ciudad/${id}`} >
         <button>+Info</button>
      </Link>
    </div>
    
  </div>)
};
