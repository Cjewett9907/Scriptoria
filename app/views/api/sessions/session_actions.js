import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
  .then(user => (dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user}))
  , err => (
    dispatch({
      type: RECEIVE_SESSION_ERRORS,
      errors: err.responseJSON
    })
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
  .then(user => (dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user}))
  , err => (
    dispatch({
      type: RECEIVE_SESSION_ERRORS,
      errors: err.responseJSON
    })
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch({
      type: LOGOUT_CURRENT_USER,
      userId: user
    })
  ))
);
