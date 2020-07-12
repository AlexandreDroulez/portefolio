// == Import npm
import React from 'react';
import emailjs from 'emailjs-com';

// == Import
import Field from 'src/containers/Field';
import ButtonSubmit from 'src/components/Buttons/ButtonSubmit';
import Proptypes from 'prop-types';
import './styles.scss';

// == Composant
const ContactForm = ({
  changeValueInForm,
  email,
  name,
  entreprise,
  number,
  message,
  toggleModals,
}) => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('alex1_droulez_gmail_com', 'template_WhHCY3RE', event.target, 'user_yBm3sP2CjsJyt4wF7TvEr')
      .then((result) => {
        toggleModals('contactModal');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="form-first">
      <form onSubmit={sendEmail}>
        <label>
          Contactez-moi :
          <Field
            fieldClassName="field-input"
            type="text"
            placeholder="Nom"
            name="name"
            minLengthWord="2"
            maxLengthWord="30"
            onChange={(event) => (changeValueInForm('name', event))}
            value={name}
          />
          <Field
            fieldClassName="field-input"
            type="text"
            placeholder="entreprise"
            name="entreprise"
            minLengthWord="2"
            maxLengthWord="30"
            onChange={(event) => (changeValueInForm('entreprise', event))}
            value={entreprise}
          />
          <Field
            fieldClassName="field-input"
            type="email"
            placeholder="E-mail"
            name="email"
            minLengthWord="5"
            onChange={(event) => (changeValueInForm('email', event))}
            value={email}
          />
          <Field
            fieldClassName="field-input"
            type="tel"
            placeholder="Télèphone"
            name="number"
            minLengthWord="10"
            maxLengthWord="10"
            onChange={(event) => (changeValueInForm('number', event))}
            value={number}
          />
          <textarea
            required="required"
            minLength="10"
            onChange={(event) => (changeValueInForm('message', event.target.value))}
            value={message}
          />
        </label>
        <ButtonSubmit />
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  changeValueInForm: Proptypes.func.isRequired,
  toggleModals: Proptypes.func.isRequired,
  email: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  number: Proptypes.number.isRequired,
  entreprise: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
};

// == Export
export default ContactForm;
