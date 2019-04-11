import * as ReviewAPIUtil from '../util/reviews_api_util'

export const ADD_REVIEW = "ADD_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"


export const addReview = (payload) => ({
  type: ADD_REVIEW,
  payload
})

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const updateReview = (payload) => ({
  type: UPDATE_REVIEW,
  payload
})


export const addReviewToReviews = (review) => dispatch =>(
ReviewAPIUtil.addReviewToReviews(review)
  .then( review => dispatch(addReview(review)),
  // err => dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
));
export const deleteReview = (bookId) => dispatch =>(
ReviewAPIUtil.deleteReview(bookId)
  .then( reviewId => dispatch(removeReview(reviewId)),
  // err => dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
));

export const editReview = (review) => dispatch =>(
ReviewAPIUtil.editReview(review)
  .then( review => dispatch(updateReview(review)),
  // err => dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
));
