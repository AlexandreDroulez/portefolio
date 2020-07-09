/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import ButtonContact from 'src/components/Buttons/ButtonContact';
import { toggleModals } from 'src/actions/modals';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggleModals: (name) => {
    const action = toggleModals(name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonContact);
