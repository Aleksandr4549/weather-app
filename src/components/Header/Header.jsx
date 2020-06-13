import React from 'react';

import logo from '../../accets/logo.png'
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.img__container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.title__container}>
        <h3>Weather</h3>
      </div>
      <div></div>   
    </header>
  );
}

export default Header;