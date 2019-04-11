import React from 'react';
import BrainstormIndexItem from './brainstorm_index_item';

  class BrainstormIndex extends React.Component{

  componentDidMount(){
    this.props.indexBook()
  }

  render(){
    return(


    <div className='jsx-wrapper'>

          <div className="pic-container-flexer">
            <section className="pic-wrapper-footer">
            </section>
          </div>


          <section className="main-container">

            <section className="main-sidebar">
            </section>

              <section className="main-bookcase">
                  <div className="img-wrapper">

                  
                      {this.props.books.map (book => (
                        <BrainstormIndexItem
                          book={book}
                          key={book.id}
                        />
                      ))}

                </div>
            </section>

          </section>
        </div>


    )
  }
};

export default BrainstormIndex;
