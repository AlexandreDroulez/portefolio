// == Import npm
import React from 'react';

// == Import
import PropTypes from 'prop-types';
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
    Contact
  </button>
);

ButtonContact.propTypes = {
  toggleModals: PropTypes.func.isRequired,
};

// == Export
export default ButtonContact;

// id for emailJs alex1_droulez_gmail_com
