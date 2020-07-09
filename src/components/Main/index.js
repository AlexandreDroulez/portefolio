// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';


// import
import Card from 'src/containers/Main/Card';

// == Import
import './styles.scss';

// == Composant
const Main = () => (
  <div className="main">
    <div className="main-container-presentation">
      <h1 className="main-container-presentation-title"><p>Hello</p>i'am Alexandre</h1>
    </div>
    <div className="main-container-card">
      <Card>
        <h2 className="card-container-project-title">Présentation</h2>
        <div>
          Née un froid matin d'autonne le 02 décembre 1984 je fus prenomé Alexandre. Apres moulte peripecie et une enfance baigné dans le sport je cherche aujourd'hui à m'elever intellectuellement. 6 mois que mes hemisphere droite et gauche on repris du service et j'aime ca.
        </div>
      </Card>
      <Card>
        <h2 className="card-container-project-title">Développeur web DÉBUTANT</h2>
        <div>
          Toujour désireux de relever de nouveaux challenges, motiver pour apprendre, également rigoureux, respectueux ,ponctuel, autonome et curieux, je souhaiterais rejoindre les effectifs d'une entreprise afin de participer aux développement de ces projets et continuer d'appendre encore et toujours.
        </div>
      </Card>
      <Card>
        <div className="card-container-project">
          <h2 className="card-container-project-title">Ma Clase Virtuelle</h2>
          <ReactPlayer controls width="300" height="100" url="https://youtu.be/Df1AQhJlm5c?t=3681" />
          <p className="card-container-project-info">React/Redux/Nodejs/Postgresql</p>
        </div>
      </Card>
      <Card>
        <h2 className="card-container-project-title">Liens</h2>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/alexandre-droulez-b20253185/">Linkedin</a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/AlexandreDroulez">GitHub</a>
        </div>
      </Card>
    </div>
  </div>
);

// == Export
export default Main;
