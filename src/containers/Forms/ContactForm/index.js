/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ContactForm from 'src/components/Forms/ContactForm';
import { changeValueInForm } from 'src/actions/main';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = (state) => ({
  email: state.main.email,
  name: state.main.name,
  number: state.main.number,
  entreprise: state.main.entreprise,
  message: state.main.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeValueInForm: (name, value) => {
    const action = changeValueInForm(name, value);
    dispatch(action);
  },
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
