import { connect } from 'react-redux';
import { indexBook } from '../../actions/book_actions';
import BookIndex from './book_index';

// import searchFrom from '../search/search_form'

const mapStateToProps = ({session, entities }) => {
  const bookshelf = Object.values(entities.collections)

  return {
    books: Object.values(entities.books),
    currentUser: session.currentUser 
  };
};

const mapDispatchToProps = dispatch => ({
  indexBook: () => dispatch(indexBook()),
  updateSearch: () => dispatch(updateSearch()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);



// import { connect } from 'react-redux';
//
// import { updateFilter } from '../../actions/filter_actions';
// import { asArray } from '../../reducers/selectors';
// import Search from './search';
//
// const mapStateToProps = state => ({
//   benches: asArray(state.entities),
//   minSeating: state.ui.filters.minSeating,
//   maxSeating: state.ui.filters.maxSeating
// });
//
// const mapDispatchToProps = dispatch => ({
//   updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search);
