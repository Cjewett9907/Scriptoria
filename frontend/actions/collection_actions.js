import * as CollectionAPIUtil from '../util/collections_api_util'

export const ADD_BOOK = "ADD_BOOK"
export const REMOVE_BOOK = "REMOVE_BOOK"


export const addBook = (collection) => ({
  type: ADD_BOOK,
  collection
})

export const removeBook = (collectionId) => ({
  type: REMOVE_BOOK,
  collectionId
})

export const addBookToCollection = (bookId) => dispatch =>(
CollectionAPIUtil.addToCollection(bookId)
  .then( collection => dispatch(addBook(collection)),
  // err => dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
));
export const removeBookFromCollection = (bookId) => dispatch =>(
CollectionAPIUtil.removeFromCollection(bookId)
  .then( collectionId => dispatch(removeBook(collectionId)),
  // err => dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
));


// add updateBook

// call the collections util file
