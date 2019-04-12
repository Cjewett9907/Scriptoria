import React from 'react';
import CollectionIndexItem from './collection_index_item';
// import SearchForm from '../search/search_form'


class CollectionIndex extends React.Component{


  render() {
    const { title, description, read_status, image_url } = this.props.books;
  
    return(

      <section className="main-sidebar">

            <div className="thumbnail-index-wrapper">
              <div className="thumbnail-title">

                <h1>Your bookshelf:</h1>
              </div>

                {this.props.books.map (book => (
                  <CollectionIndexItem
                    book={book}
                    key={book.id}
                  />
                ))}
            </div>
      </section>
    )
  }


}


export default CollectionIndex
