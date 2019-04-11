import React from 'react';
import { Link } from 'react-router';
import ReviewsContainer from '../reviews/reviews_container'

// import ReviewListItemContainer from './review_list_item_container';

// const reviewList = (reviews) => (
//   reviews.map(review => (
//     <ReviewListItemContainer
//       review={review}
//       key={review.id}
//     />
//   ))
// );
class BookDetail extends React.Component {

  // componentDidMount(){
  //
  //   this.props.showBook(this.props.id)
  // }
// const BookDetail = ( book
//    // , reviews
//   ) => {


  render(){

    // if (this.props.isInBookshelf){
    //   actionButton = <button className="button-shelf-del" onClick={this.handleClickCollectionsRemove}>Remove from Bookshelf</button>
    // } else {
    //   actionButton = <button className="button-shelf-action" onClick={this.handleClickCollectionsAdd}>Add to Bookshelf</button>
    // }


    const {book} = this.props;

    return(
    <div>
      <ul className="book-list">


        <br/>
        {/* <li>Rating: {book.average_rating || 'No reviews yet'}</li> */}


        <li className="book-list-title">{book.title}</li>
        <br/>
        <li>{`By: ${book.author}`}</li>
        <br/>
        <select className="drop-down-rating" name="Rating" value="Rating"
          // {this.props.book.read_status}
           onChange={this.handleChange}
           >


          <option value="5" >Rating 5</option>
          <option value="4" >4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <br/>
        <br/>
        {/* <li className="show-headings" >Description: </li> */}
        <li>{`"${book.description}"`}</li>
        <br/>


        {/* if book is in bookshelf */}
        <section className="book-review">
          {/* <h1>What do you think of this book?</h1> */}
          <ReviewsContainer
            book={this.props.book}
          />

        </section>
          {/* {actionButton} */}
        <section>

        </section>


      </ul>
      <br/>
      {/* <div className="reviews">
        <h3>Reviews</h3>
        {reviewList(reviews)}
      </div> */}
    </div>
  )
  };
};

export default BookDetail;
