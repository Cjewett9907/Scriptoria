import React from 'react';
import { withRouter } from 'react-router-dom';
import {createReview} from '../../util/book_api_util.js'
// import BookShowContainer from './book_show_container';

class ReviewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    // { reviews:
      {
    //   rating: 5,
      body: ' '
    // }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(){
  //
  // }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  handleSubmit(e) {
      e.preventDefault();
        const bookId = parseInt(this.props.match.params.bookId)
      if (this.props.filteredReview + 1 === [] + 1) {
      const review = Object.assign({}, this.state, {
      book_id: bookId
       });
          this.props.addReviewToReviews(review);

        } else {
        const review = Object.assign({}, this.state, {
        book_id: bookId,
        id: this.props.filteredReview[0].id
        });
        this.props.editReview(review)
      };

      this.state.body = ''
    }

    //   const bookId = parseInt(this.props.match.params.bookId)
    //   const review = Object.assign({}, this.state, {
    //   book_id: bookId,
    //   id: this.props.filteredReview[0].id
    //
    // });
    // // if a review already exists for this user  /update
    //   if (this.props.filteredReview[0].user_id === this.props.currentUser.id){
    //
    //     this.props.editReview(review)
    //   } else{
    //     this.props.addReviewToReviews(review);
    //   }
    //
    //   this.state.body = ''
    // }



  render() {

    // console.log(this.props)
    return (
        <form onSubmit={this.handleSubmit}>
          <h1> enter your review </h1>
            {/* <br/>
            <ul>
              <li>{this.state.body}</li>
            </ul>
            <br/> */}
            <textarea className='review-textbox'
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.update("body")}
                />
                <br/>
                <input className="drop-down-rating" type="submit" />
        </form>
    )
  }
}

export default withRouter(ReviewsForm);
