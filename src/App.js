import { React , useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Ciudad from './components/Ciudad';
import Footer from './components/Footer';
// import { API_KEY } from './utils/constants';
import Swal from 'sweetalert2';
require('dotenv').config()



export default function App() {  
  let isCity=false;
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
     
    const apiKey = process.env.REACT_APP_API_KEY
        
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
          
          cities.map(c => {
            if(c.id===ciudad.id) isCity=true
          })          
          if(isCity===true){           
            Swal.fire('The city is already displayed')
          }else{             
            setCities(oldCities => [...oldCities, ciudad]);           
          }
          
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid city!'           
          })
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
     
          
    </div>
  );
};