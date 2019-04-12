
import * as BookAPIUtil from '../util/book_api_util'

export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const RECEIVE_BOOK = "RECEIVE_BOOK"
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

export const indexBook = () => dispatch =>(
  BookAPIUtil.indexBook()
  .then( (payload) => dispatch({ type: RECEIVE_BOOKS, payload: payload}), // added payload
  err => dispatch({ type: RECEIVE_BOOK_ERRORS, errors: err.responseJSON})
));

export const showBook = (bookId) => dispatch =>(
  BookAPIUtil.showBook(bookId)
  .then( (payload) => dispatch({ type: RECEIVE_BOOK,  payload: {reviews: {}, ...payload} } ), // added payload
  err => dispatch({ type: RECEIVE_BOOK_ERRORS, errors: err.responseJSON})
));

export const updateBook = (BookId) => dispatch =>(
  BookAPIUtil.updateBook(BookId)
  .then( (payload) => dispatch({ type: RECEIVE_BOOK, payload: {reviews: {}, ...payload} } ), // added payload
  err => dispatch({ type: RECEIVE_BOOK_ERRORS, errors: err.responseJSON})
));


export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => (
  BookAPIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
