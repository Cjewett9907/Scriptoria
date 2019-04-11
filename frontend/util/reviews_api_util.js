import React from 'react'

// review = {bookId : 3, body: body}
export const addReviewToReviews = (review) => (
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: {reviews: {body: review.body, book_id: review.book_id}}
  })
)

export const editReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: {reviews: {body: review.body, book_id: review.book_id}}
  })
)

export const removeFromReviews = (bookId) => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${bookId}`

  })
)
