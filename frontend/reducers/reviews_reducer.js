
import merge from 'lodash/merge';
import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
} from '../actions/book_actions';

import {
  ADD_REVIEW,
  REMOVE_REVIEW,
  UPDATE_REVIEW
} from '../actions/review_actions';


const reviewsReducer = (reviewState = {}, action) => {
  Object.freeze(reviewState);
  switch(action.type) {
    case ADD_REVIEW:
      return merge({}, reviewState, action.payload.reviews)
    case REMOVE_REVIEW:
      const newCollection = merge({}, reviewState );
      const newCollectionArr = Object.keys(action.reviewId)
      delete newCollection[newCollectionArr[0]] // delete at the position of the id of the link
      return newCollection
    case UPDATE_REVIEW:
      return merge({}, reviewState, action.payload.reviews)

    case RECEIVE_BOOKS:

        // return action.books;
      return Object.assign({}, reviewState, action.payload.reviews)
    case RECEIVE_BOOK:
      return action.payload.reviews
        // const newBook = { [action.payload.reviews.id]: action.payload.reviews };
        // return Object.assign({}, state, newBook);
        // const newBook = Object.assign({}, state, action.book)
        // return newBook
    default:
      return reviewState;
  }
};

export default reviewsReducer;
