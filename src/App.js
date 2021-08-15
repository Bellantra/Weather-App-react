import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
//import Card from './components/Card';
import Cards from './components/Cards';
import Ciudad from './components/Ciudad';
import About from './components/About';

export default function App() {
  const [cities, setCities] = useState([]);
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    const apiKey= '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: Math.round(recurso.wind.speed),
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: Math.round(recurso.coord.lat),
            longitud: Math.round(recurso.coord.lon)
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  

  return (
    <div className="App">      
      <Route
       path='/'
      render={() => <Nav onSearch={onSearch} />}
      />

      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
          city={onFilter(match.params.ciudadId)}
          />}
       />

       <Route exact path='/'>        
         <Cards cities={cities} onClose={onClose}/> 
      </Route>

      <Route
        path='/about'
        component={About}
      />  
          
    </div>
  );
};