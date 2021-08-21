import { React, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Cards from "./components/Cards/Cards";
import City from "./components/CityDetail/City";
import Footer from "./components/Footer/Footer";
import Swal from "sweetalert2";
require("dotenv").config();

export default function App() {
  let isCity = false;
  const [cities, setCities] = useState([]);

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  function onSearch(ciudad) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        console.log(recurso);
        if (recurso.main !== undefined) {
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
            longitud: Math.round(recurso.coord.lon),
          };
          cities.forEach((c) => {
            if (c.id === ciudad.id) isCity = true;
          });
          if (isCity === true) {
            isCity = false;
            Swal.fire("The city is already displayed");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid city!",
          });
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="app_container">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />

      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => <City city={onFilter(match.params.ciudadId)} />}
      />

      <Route exact path="/">
        <Cards cities={cities} onClose={onClose} />
      </Route>

      <Route exact path="/">
        <Footer className="footer" />
      </Route>
    </div>
  );
}
