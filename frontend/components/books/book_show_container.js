import React from 'react';
import { connect } from 'react-redux';
import { showBook } from '../../actions/book_actions';
import BookShow from "./book_show"

const mstp = ({entities, session}, ownProps) => {
  const bookshelfBooks =  Object.values(entities.collections).map ( link => entities.books[link.book_id] )

  return({
  book: entities.books[ownProps.match.params.bookId],

  // isInBookshelf: bookshelfBooks.includes(book)
  // book: state.entities.book
})
}

const mdtp = (dispatch) => ({
  showBook: (bookId) => dispatch(showBook(bookId))
})


export default connect(mstp, mdtp)(BookShow)


// const mapStateToProps = (state, { match }) => {
//   const benchId = parseInt(match.params.benchId);
//   const bench = selectBench(state.entities, benchId);
//   const reviews = selectReviewsForBench(state.entities, bench);
//   return {
//     benchId,
//     bench,
//     reviews
//   };
// };
