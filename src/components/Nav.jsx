import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <div className={styles.subContainer}>
        <img className={styles.imagen} src={Logo} alt="" />
        <h4>Henry - Weather App</h4>
        </div>      
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>      
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
