import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Card({ min, max, name, img, id, onClose }) {
  //Preguntar porque {cities,onClose}
  // acá va tu código

  return (
    <div className={styles.card}>
      <div className={styles.btn_container}>
        <AiFillCloseCircle className={styles.btn} onClick={onClose} />
      </div>

      <h4 className={styles.title}>{name}</h4>

      <div className={styles.datos}>
        <section className={styles.min_max}>
          <div>
          <h6>Min</h6>
          <h6>{min}º</h6>
        </div>
        <div>
          <h6>Max</h6>
          <h6>{max}º</h6>
        </div>
        </section>        
        <figure className={styles.img_container}>
          <img
        className={styles.img}
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Imagen"
      />
        </figure>
         
      </div>
     
      <Link to={`/ciudad/${id}`}>
        <button className={styles.info}>+Info</button>
      </Link>
    </div>
  );
}
