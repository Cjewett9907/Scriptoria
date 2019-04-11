import { connect } from 'react-redux';
import { indexBook } from '../../actions/book_actions';
import ReviewsIndex from './reviews_index';
import ReviewsForm from './reviews_form';
import { addReviewToReviews, deleteReview, editReview } from '../../actions/review_actions'
// import { updateSearch } from '../../actions/search_actions'
import {createReview} from '../../actions/book_actions'


const mapStateToProps = ({session, entities },
  ownProps
    ) => {

      // const idO = ownProps.book.id
      const bookshelf = Object.values(entities.collections)
      const reviews = Object.values(entities.reviews)
      const review = (reviews.filter (review => review.book_id === ownProps.book.id))
      const userReviewed =  Object.values(entities.reviews).includes(review)
      const filteredReview = Object.values(entities.reviews)
      .filter ( object => (object.book_id === ownProps.book.id && object.user_id === session.currentUser.id))



      return {
        userReviews: reviews.map ( review => entities.books[review.book_id]),
        books: bookshelf.map ( link => entities.books[link.book_id] ),
        review: review,
        reviews: reviews,
        userReviewed: userReviewed,
        filteredReview: filteredReview,
        currentUser: session.currentUser
        // ownProps: ownProps
      }
};

const mapDispatchToProps = dispatch => ({
  addReviewToReviews: (review) => dispatch(addReviewToReviews(review)),
  createReview: (review) => dispatch(createReview(review)),
  editReview: (review) => dispatch(editReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
