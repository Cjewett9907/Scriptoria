import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
