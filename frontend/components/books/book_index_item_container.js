import { connect } from 'react-redux';
import { indexBook } from '../../actions/book_actions';
import BookIndexItem from './book_index_item';
import { addBookToCollection, removeBookFromCollection } from '../../actions/collection_actions'
import { updateSearch } from '../../actions/search_actions'
import { openModal } from '../../actions/modal_actions'

// import searchFrom from '../search/search_form'

const mapStateToProps = ({session, entities }, { book }) => {
  const bookshelfBooks =  Object.values(entities.collections).map ( link => entities.books[link.book_id] )
  
  return {
    isInBookshelf: bookshelfBooks.includes(book),
    currentUser: session.currentUser
    // if (this.props.bookshelfBooks.includes(this.props.book)){
    //
    //   actionButton = <button className="button-shelf-action" onClick={this.handleClickCollectionsRemove}>Remove from Bookshelf</button>
    // } else {
    //   actionButton = <button className="button-shelf-action" onClick={this.handleClickCollectionsAdd}>Add to Bookshelf</button>
    // }

  };
};

const mapDispatchToProps = dispatch => ({
  addBookToCollection: (bookId) => dispatch(addBookToCollection(bookId)),
  removeBookFromCollection: (bookId) => dispatch(removeBookFromCollection(bookId)),
  openModal: (title) => dispatch(openModal(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndexItem);
