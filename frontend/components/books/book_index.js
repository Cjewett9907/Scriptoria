import React from 'react';
import BookIndexItemContainer from './book_index_item_container';
import SearchForm from '../search/search_form'
import CollectionContainer from '../collection/collection_container'
import HeaderContainer from '../header/header_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

  class BookIndex extends React.Component{
    constructor(props) {
      super(props);

     
    }
    // handlePicClick(){
    //   this.props.history.push(`/splash`);
    // }

  componentDidMount(){
    this.props.indexBook()
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentUser.id !== this.props.currentUser.id)
    window.location.reload();
  }



  render(){
    return(


    <div className='jsx-wrapper'>



      <HeaderContainer />

          <div className="pic-container-flexer">
            <section className="pic-wrapper-footer">
              <div 
              // turn this on to make the image clickable
              // onClick={this.handlePicClick}
              >
                <img className="background-books" src="https://www.ancient-origins.net/sites/default/files/field/image/Greek-Philosophers.jpg" />
              </div>

            </section>

          </div>


          <section className="main-container">

            <CollectionContainer />

              <section className="main-bookcase">
                  <div className="img-wrapper">

                      {this.props.books.map (book => (
                        <BookIndexItemContainer
                          key={book.id}
                          book={book}
                        />
                        
                      ))}

                </div>
            </section>

          </section>
        </div>


    )
  }
};

export default BookIndex;
