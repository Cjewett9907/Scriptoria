import { connect } from 'react-redux';

import { indexBook } from '../../actions/book_actions';
import BrainstormIndex from './brainstorm_index';

const mapStateToProps = ({entities: { books } }) => {

  return {
    books: Object.values(books)
  };
};

const mapDispatchToProps = dispatch => ({
  indexBook: () => dispatch(indexBook())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrainstormIndex);
