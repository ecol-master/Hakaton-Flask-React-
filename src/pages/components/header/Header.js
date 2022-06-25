import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import "./Header.css";

import BurgerMenu from "./BurgerMenu";
import HomePage from '../../HomePages';
import News from '../../News';
import Archive from "../../Archive";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo logo">
            <svg
              className="logo__svg"
              viewBox="0 0 24 24"
              id="Main"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M22,3a1,1,0,0,0-1-1H3A1,1,0,0,0,3,4V17a1,1,0,0,0,0,2H9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,19H21a1,1,0,0,0,0-2V4A1,1,0,0,0,22,3ZM19,17H5V4H19Z" />
              <path d="M7,12h4a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7v4A1,1,0,0,0,7,12ZM8,8h2v2H8Z" />
              <path d="M14,8h3a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z" />
              <path d="M14,12h3a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z" />
              <path d="M7,16H17a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
            </svg>
          </div>
          <ul className="header__nav nav">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/news" className="nav__link">
                Новости
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/archive" className="nav__link">
                Архив
              </Link>
            </li>
          </ul>
          <div className="logo-title-mobile">WhyNot?</div> 
          <div className="burger" onClick={() => setMenuActive(true)}>
            <svg
              className="burger__svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <title />
              <g data-name="Layer 2" id="Layer_2">
                <path d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z" />
                <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                <path d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
              </g>
              <g id="frame">
                <rect class="cls-1" />
              </g>
            </svg>
          </div>
        </div>
        
        <BurgerMenu active={menuActive} setActive={setMenuActive} />

        
      </header>
      <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/news' element={<News />}/>
    <Route path='/archive' element={<Archive />}/>
    </Routes>
    </div>
  );
};

export default Header;
