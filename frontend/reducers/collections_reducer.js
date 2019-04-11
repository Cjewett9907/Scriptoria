
import merge from 'lodash/merge';
import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
} from '../actions/book_actions';

import {
  ADD_BOOK,
  REMOVE_BOOK,
} from '../actions/collection_actions';


const collectionsReducer = (collectionState = {}, action) => {
  Object.freeze(collectionState);
  switch(action.type) {
    case ADD_BOOK:
      return merge({}, collectionState, action.collection)
    case REMOVE_BOOK:
      const newCollection = merge({}, collectionState );
      const newCollectionArr = Object.keys(action.collectionId)
      delete newCollection[newCollectionArr[0]] // delete at the position of the id of the link
      return newCollection
    case RECEIVE_BOOKS:
      
        // return action.books;
      return Object.assign({}, collectionState, action.payload.collections)
      // case RECEIVE_BOOK:
      //
      //   const newBook = { [action.payload.id]: action.payload };
      //   return Object.assign({}, state, newBook);
      //   // const newBook = Object.assign({}, state, action.book)
      //   // return newBook
      //
      //


    default:
      return collectionState;
  }
};

export default collectionsReducer;
