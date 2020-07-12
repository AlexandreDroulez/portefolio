// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';

// import video

// == Import
import './styles.scss';

// == Composant
const ClassVirtuelle = () => (
  <div className="main-classe-virtuelle">
    <h2 className="main-classe-virtuelle-title">Ma Clase Virtuelle</h2>
    <ReactPlayer controls width="300" height="100" url="https://www.youtube.com/watch?v=dSDWdO_EKv8&feature=youtu.be" />
    <p className="main-classe-virtuelle-info">React/Redux/Nodejs/Postgresql</p>
  </div>
);

// == Export
export default ClassVirtuelle;
