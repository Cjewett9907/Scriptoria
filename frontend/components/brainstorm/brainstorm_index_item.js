import React from 'react';
import { withRouter } from 'react-router-dom';

import BrainstormIndexContainer from './brainstorm_index_container';

class BrainstormIndexItem extends React.Component {
  constructor(props) {
    super(props);

    

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  render() {

    const { title, description, read_status, image_url } = this.props.book;
    return (
      <div
        className="book-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          {/* <span className="index-item-category">Rating:</span> */}
          {/* <span className="index-item-copy">
            {average_rating || 'No reviews yet'}
          </span> */}

          <img className="index-image" src={image_url}/>
          <br/>
          <span className="index-headings"></span>
          <span className="index-item-copy">{title}</span>
          {/* <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
          <span className="index-item-category">Read Status:</span>
          <span className="index-item-copy">{read_status}</span> */}
        </div>

      </div>
    );
  }
}

export default withRouter(IndexItem);
