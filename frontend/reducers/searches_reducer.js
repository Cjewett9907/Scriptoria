import { UPDATE_SEARCH } from '../actions/search_actions';

const defaultFilters = Object.freeze({
  title: "",
  author: "",
  genre: ""
});

const searchesReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_SEARCH) {
    const newSearch = {
      [action.search]: action.value
    };
    return Object.assign({}, state, newSearch);
  } else {
    return state;
  }
};

export default searchesReducer;
