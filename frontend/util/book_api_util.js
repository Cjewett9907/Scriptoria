import React from 'react'


export const indexBook = () => (
  $.ajax({
    method: "GET",
    url: "/api/books"
  })
)

export const showBook = (bookId) => (

  $.ajax({
    method: "GET",
    url: `/api/books/${bookId}`
  })
)


export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
