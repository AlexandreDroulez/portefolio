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
    <div className="main-link-container">
      <div className="main-link-container-linkedin">
        <a target="_blank" href="https://www.linkedin.com/in/alexandre-droulez-b20253185/">
          Linkedin
        </a>
      </div>

      <div className="main-link-container-Ma-Classe-Virtuel" >
        <a target="_blank" href="https://github.com/AlexandreDroulez/Ma-Classe-Virtuel">
          Ma-Classe-Virtuelle
        </a>
      </div>

      <div className="main-link-container-portefolio">
        <a target="_blank" href="https://github.com/AlexandreDroulez/portefolio">
          Portefolio
        </a>
      </div>

      <div className="main-link-container-CEPR">
        <a target="_blank" href="https://github.com/AlexandreDroulez/CEPR">
          Auto-école Cepr
        </a>
      </div>
    </div>
  </div>
);

// == Export
export default Link;
