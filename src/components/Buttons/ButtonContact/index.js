// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const ButtonContact = ({ toggleModals }) => (
  <button
    type="button"
    className="button-contact"
    onClick={() => {
      toggleModals('contactModal');
    }}
  >
    ButtonContact
  </button>
);

// == Export
export default ButtonContact;
