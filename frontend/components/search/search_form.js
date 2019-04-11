import React from 'react';
import updateSearch from '../../actions/search_actions'


const handleChange = (search, updateSearch) => e => (
  updateSearch(search, e.currentTarget.value)
);

const SearchForm = ({ title, author, genre, updateSearch }) => (
  <div>
    <span className="search-title">Search results:</span>
    <br/>
    <label>Title</label>
    <input
      type="text"
      value={title}
      onChange={handleChange('title', updateSearch)}
    />
     <br/>
    <label>Author</label>
    <input
      type="text"
      value={author}
      onChange={handleChange('author', updateSearch)}
    />
    <br/>
   <label>Genre</label>
   <select name="Genre" value={genre} onChange={handleChange('genre', updateSearch)}>
     <option value="action">Action</option>
     <option value="romace">Romance</option>
     <option value="female">Female Lead</option>
     <option value="philosophy">Philosophy</option>
     <option value="humor">Humor</option>
   </select>


  </div>
);

export default SearchForm;
