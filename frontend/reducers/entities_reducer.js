import { combineReducers } from 'redux';
import booksReducer from './books_reducer'
import usersReducer from './user_reducer';
import collectionsReducer from './collections_reducer'
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  collections: collectionsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
