import React from 'react';
import { withRouter } from 'react-router-dom';

// import BookShowContainer from './book_show_container';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  render() {

    // const { title, description, read_status, image_url } = this.props.book;
    return (
      // <h1> IN THE INDEX ITEM RENDER</h1>
        <div className="book-thumbnail-item" onClick={this.handleClick}>
          <div className="thumbnail-item-info">
            <img className="thumbnail-image" src={this.props.book.image_url}/>
            <br/>
          </div>
        </div>
    )
  }
}

export default withRouter(CollectionIndexItem);
