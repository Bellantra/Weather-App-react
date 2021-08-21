import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

function Nav({onSearch}) {

  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/' >
        <div className={styles.subContainer} >
        <img className={styles.imagen} src={Logo} alt="Logo" />
        <h5 className={styles.title}>Weather App</h5>
        </div>      
      </Link>
       
      <SearchBar className={styles.searchBar} onSearch={onSearch}/>

     
    </div>
  );
};

export default Nav;
