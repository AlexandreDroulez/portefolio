/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  contactModal: state.modal.contactModal,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
