import React from 'react';
import { withRouter } from 'react-router-dom';

import BookShowContainer from './book_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickCollectionsAdd = this.handleClickCollectionsAdd.bind(this);
    this.handleClickCollectionsRemove = this.handleClickCollectionsRemove.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handlePicClick = this.handlePicClick.bind(this);
  }

  handlePicClick(){
    this.props.history.push(`/`);
  }

  handleClick() {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  handleClickCollectionsAdd() {
    const bookId = this.props.book.id;
    this.props.addBookToCollection(bookId)
    // this.props
  }

  handleClickCollectionsRemove() {
    const bookId = this.props.book.id;
    this.props.removeBookFromCollection(bookId)
    // this.props
  }

  handleClickLogin(){
    console.log('got there')
    this.props.openModal('got there')
  }

  render() {

    const { title, description, read_status, image_url } = this.props.book;
    let actionButton = ""
    
    if (this.props.isInBookshelf){
      actionButton = <button className="button-shelf-del" onClick={this.handleClickCollectionsRemove}>Remove from Bookshelf</button>
    } else if (!this.props.isInBookshelf && this.props.currentUser.id !== null){
      actionButton = <button className="button-shelf-action" onClick={this.handleClickCollectionsAdd}>Add to Bookshelf</button>
    }


    // console.log(this.props.currentUser.id)
    // resets the buttons to default if no currentUser
    if (this.props.currentUser.id === null) {
      actionButton = <button className="button-shelf-del" onClick={this.handleClickLogin}>Log In </button>
    //   actionButton = <button className="button-shelf-action" onClick={this.handleClickCollectionsAdd}>Add to Bookshelf</button>
    }
    console.log(actionButton)

    return (
      <div className="book-index-item">
        <div className="index-item-info">

          <img className="index-image" onClick={this.handleClick} src={image_url}/>

          {/* <br/> */}

          {/* <span className="index-headings"></span> */}

          <span className="index-item-copy">{title}</span>

          <div className="button-container">
            {/* <br/> */}
            {actionButton}
          </div>

        </div>


      </div>
    );
  }
}

export default withRouter(IndexItem);
