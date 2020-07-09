// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import GenericModal from 'src/containers/GenericModal';

// == Composant
const App = ({ contactModal }) => (
  <div className="app puff-in-center ">
    <Header />
    <Main />
    <Footer />
    <GenericModal name="contactModal" toggle={contactModal}><div>Faire le formulaire de Contact</div></GenericModal>
  </div>
);

// == Export
export default App;
