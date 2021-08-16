import React from "react";
import {Link} from 'react-router-dom';
import s from './Ciudad.module.css';

export default function Ciudad({city}) {
    if(!city) return <div></div>  //Ver porque rompe aca y como solucionar mejor
    return (
        <div className={s.container}>
                <div className={s.ciudad}>
                    <h2>{city.name}</h2>
                    <div className={s.datos}>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        <Link to='/'>
                           <button>Volver</button>
                        </Link>
                        
                    </div>
            </div>
        </div>
    )
}