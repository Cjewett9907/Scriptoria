import React from 'react';
import ReviewsForm from './reviews_form';
// import SearchForm from '../search/search_form'


class ReviewsIndex extends React.Component{

// componentDidMount(){
//
// }



  render() {
    console.log(this.props)
    return(
              <div>

                <h1>What other users have said about</h1>
                <br/>
                <h1>{this.props.book.title}:</h1>
                <br/>
                <ul>
                  {this.props.review.map (rw =>
                  <div className="review-post">{rw.body}</div>
                  )}
                </ul>
                <br/>


                {/* {this.props.userReviews.forEach (review => (

                  if (review.book_id === book.id){ */}
                  <ReviewsForm
                    key={this.props.id}
                    createReview={this.props.createReview}
                    addReviewToReviews={this.props.addReviewToReviews}
                    editReview={this.props.editReview}
                    userReviewed={this.props.userReviewed}
                    books={this.props.books}
                    filteredReview={this.props.filteredReview}
                    currentUser={this.props.currentUser}
                    // review={this.props.review}
                  />



                {/* //   // }
                // // ))} */}
            </div>
    )
  }


}


export default ReviewsIndex
