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

      this.handlePicClick = this.handlePicClick.bind(this);
    }

    handlePicClick(){
      this.props.history.push(`/splash`);
    }

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
                <img className="background-books" src="https://toppng.com/public/uploads/preview/free-png-books-in-a-row-png-115198008706zq5xpaygd.png" />
                {/* <img className="xmas" src="https://banner2.kisspng.com/20171127/4a4/merry-christmas-text-transparent-png-clip-art-5a1ba5f2488a76.3286283815117613942971.jpg" /> */}
                {/* <img className="christmas-png" src="" /> */}
                {/* <img className="background-shelf" src="https://www.brick-anew.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/t/u/tuscany.png" /> */}
              </div>
              {/* <div className="x-mas">

              </div> */}

            </section>
            {/* <section className="background-snow">
            </section> */}
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
