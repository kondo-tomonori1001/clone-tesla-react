import React from 'react'
import 'components/header/Header.css'
import GlobalNav from 'components/header/GlobalNav';
import teslaLogo from 'assets/images/teslaLogoSmall.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#">
          <img src={teslaLogo} alt="tesla Logo"/>
        </a>
      </div>
      <div className="heder__gNav">
        <GlobalNav />
      </div>
      <div className="header__right">
        <a href="#">TESLA ACCOUNT</a>
      </div>
    </div>
  )
}

export default Header;
