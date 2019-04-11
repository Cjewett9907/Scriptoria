import { combineReducers } from 'redux';
import book from './book_errors_reducer';
import session from './session_errors_reducer';

export default combineReducers({
  session,
  book
});
