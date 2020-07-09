// == Import npm
import React from 'react';
// import logo
import dragons from '../../assets/images/logo.jpg';

// import containers
import ButtonContact from 'src/containers/Buttons/ButtonContact';
// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <div className="header">
    <img className="header-logo" src={dragons}></img>
    <ButtonContact />
  </div>
);

// == Export
export default Header;
