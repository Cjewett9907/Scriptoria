import { indexBook } from './book_actions'

export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const changeSearch = (search, value) => ({
  type: UPDATE_SEARCH,
  search,
  value
});

export const updateSearch = (search, value) => (dispatch, getState) => {
  dispatch(changeSearch(search, value));
  return fetchBooks(getState().ui.searches)(dispatch);
};
