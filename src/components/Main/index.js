// == Import npm
import React from 'react';


// import
import Card from 'src/containers/Main/Card';
import Presentation from 'src/components/Main/Presentation';
import ClassVirtuelle from 'src/components/Main/ClassVirtuelle';
import Link from 'src/components/Main/Link';
import Motivation from 'src/components/Main/Motivation';

// == Import
import './styles.scss';

// == Composant
const Main = () => (
  <div className="main">
    <div className="main-container-presentation">
      <h1 className="main-container-presentation-title text-focus-in">
        <div className="letter-hello ">
          Hello
        </div>
        <div>I'am Alexandre</div>
        <div>
          Développeur web
        </div>
      </h1>
    </div>
    <div className="main-container-card">
      <Card><Presentation /></Card>
      <Card><Motivation /></Card>
      <Card><ClassVirtuelle /></Card>
      <Card><Link /></Card>
    </div>
  </div>
);

// == Export
export default Main;
