import React from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import s from "./City.module.css";

export default function Ciudad({ city }) {
  let history = useHistory();
  console.log(city);
  if (!city) return <div></div>; //Ver porque rompe aca y como solucionar mejor
  return (
    <div className={s.card}>
      <div className={s.container}>
        <div className={s.ciudad}>
          <h2 className={s.title}>{city.name}</h2>
          <div className={s.datos}>
            <div>Temperature: {city.temp} ºC</div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds}</div>
            <div>Latitude: {city.latitud}º</div>
            <div>Longitude: {city.longitud}º</div>
            <Link to="/">
              <button
                className={s.cta}
                onClick={() => {
                  history.goBack();
                }}
              >
                Return
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
