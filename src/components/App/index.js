// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import GenericModal from 'src/containers/GenericModal';
import ContactForm from 'src/containers/Forms/ContactForm';

// == Composant
const App = ({ contactModal }) => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
    <GenericModal name="contactModal" toggle={contactModal}><ContactForm /></GenericModal>
  </div>
);

// == Export
export default App;
