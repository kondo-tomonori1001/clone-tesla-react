import React from 'react';
import './GlobalNav.css';

const GlobalNav = () => {
  return (
    <React.StrictMode>
      <ul className="gNav">
        <li className="gNav__item">
          <a href="#" className="gNav__link">MODEL S</a>
        </li>
        <li className="gNav__item">
          <a href="#" className="gNav__link">MODEL 3</a>
        </li>
        <li className="gNav__item">
          <a href="#" className="gNav__link">MODEL X</a>
        </li>
        <li className="gNav__item">
          <a href="#" className="gNav__link">MODEL Y</a>
        </li>
        <li className="gNav__item">
          <a href="#" className="gNav__link">Cybertruck</a>
        </li>
        <li className="gNav__item">
          <a href="#" className="gNav__link">Powerwall</a>
        </li>
      </ul>
    </React.StrictMode>
  )
}

export default GlobalNav;