import React, { useState } from "react";
import st from './SearchBar.module.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState ('');
  return (
    <div className={st.container}> 
      <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input   
        className={st.btnInput}     
        type="text"
        placeholder="Lugar..."
        value={city}
        onChange={e => setCity(e.target.value)} //Ver bien!!!
      />
      <input className={st.btnSearch} type="submit" value="Search" />
    </form>
        </div>
  );

    
};

