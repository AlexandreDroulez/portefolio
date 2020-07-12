// == Import npm
import React from 'react';
// import logo
import logo from '../../assets/images/js.png';

// import containers
import ButtonContact from 'src/containers/Buttons/ButtonContact';
// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <div className="header">
    <img className="header-logo" src={logo}></img>
    <ButtonContact />
  </div>
);

// == Export
export default Header;

// https://tenor.com/8UE2.gif