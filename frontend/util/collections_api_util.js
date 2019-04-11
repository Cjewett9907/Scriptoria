import React from 'react'


export const addToCollection = (bookId) => (
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: {collection: {book_id: bookId}}
  })
)


export const removeFromCollection = (bookId) => (
  $.ajax({
    method: "DELETE",
    url: `api/collections/${bookId}`

  })
)


export const updateStatus = (book, status) => (
  $.ajax({
    method: "PATCH",
    url: `/api/collections/${book.id}`,
    data: {status}
  })
)
