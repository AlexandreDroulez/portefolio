// == Import npm
import React from 'react';

// import
import Card from 'src/containers/Main/Card';
import Presentation from 'src/components/Main/Presentation';
import ClassVirtuelle from 'src/components/Main/ClassVirtuelle';
import Link from 'src/components/Main/Link';
import Motivation from 'src/components/Main/Motivation';
import TitleFirst from 'src/components/Main/TitleFirst';

// == Import
import './styles.scss';

// == Composant
const Main = () => (
  <div className="main">
    <div className="main-container-presentation">
      <TitleFirst />
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
