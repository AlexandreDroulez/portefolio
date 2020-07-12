/* eslint-disable react/jsx-no-target-blank */
// == Import npm
import React from 'react';

// import video

// == Import
import './styles.scss';

// == Composant
const Link = () => (
  <div className="main-link">
    <h2 className="main-link-title">Liens</h2>
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/alexandre-droulez-b20253185/">Linkedin</a>
    </div>
    <div>
      <a target="_blank" href="https://github.com/AlexandreDroulez">GitHub</a>
    </div>
  </div>
);

// == Export
export default Link;
