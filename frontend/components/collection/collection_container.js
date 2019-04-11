import { connect } from 'react-redux';
import { indexBook } from '../../actions/book_actions';
import CollectionIndex from './collection_index';
import { addBookToCollection, removeBookFromCollection } from '../../actions/collection_actions'
import { updateSearch } from '../../actions/search_actions'



const mapStateToProps = ({session, entities }) => {
 const bookshelf = Object.values(entities.collections)
  return {

    books: bookshelf.map ( link => entities.books[link.book_id] )
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionIndex);
