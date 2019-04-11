import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
} from '../actions/book_actions';


const bookReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_BOOKS:

      // return action.books;
      return Object.assign({}, state, action.payload.books)
    case RECEIVE_BOOK:
      // return { book: action.book};



      const newBook = { [action.payload.book.id]: action.payload.book };
      return Object.assign({}, state, newBook);
      // const newBook = Object.assign({}, state, action.book)
      // return newBook

    default:
      return state;
  }
};

export default bookReducer;
