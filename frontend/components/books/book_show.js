import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import HeaderContainer from '../header/header_container'
import BookDetail from './book_detail';

// import BookMap from '../book_map/book_map';
// import ReviewFormContainer from './review_form_container';
// import { Route } from '../../util/route_util';
// import { ReviewLink } from '../../util/link_util';

class BookShow extends React.Component{
  constructor(props) {
    super(props);


    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleLinkedPClick = this.handleLinkedClick.bind(this);
  }


  componentDidMount(){
    this.props.showBook(this.props.match.params.bookId)
  }

  handlePicClick(){
    this.props.history.push(`/`);
  }

  handleChange(){
    return ''
  }

  handleLinkedClick() {
    window.location = "https://www.linkedin.com/in/craig-jewett-14064843/"
  }


  render(){

    if (!this.props.book) {
      return null
    }


    return(
      <section className="main-show-wrapper">
        <HeaderContainer />
        <div className="first-ad"></div>


            <div className="single-book-show">
              {/* <div className="single-book-map">
                <Link to="/">Back to Books Index</Link>
              </div> */}
              <section className="sidebar">
              </section>

              <div className="book-detail-container" >

                <li className="show-image-container" onClick={this.handlePicClick}>
                  <img className="show-image" src={this.props.book.image_url} />
                </li>
                <br/>
                {/* <li>{this.props.book.read_status}</li> */}
                <select className="drop-down" name="Read Status" value="Read Status"
                  // {this.props.book.read_status}
                   onChange={this.handleChange}
                   >


                  <option value="Want to Read" >Want to Read</option>
                  <option value="Not Read" >Not Read</option>
                  <option value="Have Read">Have Read</option>
                </select>

                {/* <p onClick={this.handlePicClick}>Back to index</p> */}

              </div>


              <div>
                <BookDetail
                  book={this.props.book}
                  isInBookshelf={this.props.isInBookshelf}
                  // reviews={reviews}
                />
              </div>

                <section className="main-bookcase-show">
                    <div className="img-wrapper" onClick={this.handleLinkedClick}>
                      <img src="https://lh3.googleusercontent.com/Kwvr4DTgxUhCQZb7MLBYIrOHR1gGRYEueekaEBzYqO_In1pcNP9R_O5DuGenJBiC4Bdi66nyz7apHCJ1a3xZc9XLTG1ZowVOCKZugPIMFusfWHsYEsxdrKLOhmLbPBEorA51SwCGr_JK5HUK1nCOJ8LvQQUGfhjBqTB4UsjTJq_e2swAwdQh_DwJ__Z2gN9XOliF4iqo-eOi-gxdCYCEiuab2IEckoVghWtUsLhLg55plFYTfq_1BoXuRb1EY7YUIG0vn3BsgDg57Fh16GnPRFVPvqpKiN8oJf1VzOsLq2FEw8EJGctx7UiBYNFaOM1v23ksyUuqxv4oRF3xGkBDoVToOqNyRpX-e2y7x0Ub6uC5fUeMIKifUIa3aIz7Z0wfBE9u1y6RT0ycaLA8GhRuVH4KjOWCUeq8BaNjMJ2sgMQnz0Ti-2wgwL7sdz84pekfYC-DFENu0ai8I4DiIYEhY3pt8wQi1u0zjBeLhpMpmb_ZPbN6BSKbJaEQTgryODr3ONTEJYip6yvB_YYcZXR4MxH8Zb_l8tz8JAmRz-SgwGKWIAIzM95Y_mmcb4lHaNMEpBj9wjhTgIbCZ36RfGJRfpF-rsHsOZQ0nUNH3nw5iKnJwnW-yKLUr-RStlzC5Wx0UGt2jRpR--fhK0kf9C96vIJA=w308-h537-no"></img>
                  </div>
              </section>


                <section className="sidebar">

                </section>

              </div>

      </section>
  );
}
};

export default BookShow;
