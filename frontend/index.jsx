import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout, signUp} from './actions/session_actions'
import {addReviewToReviews, removeReviewFromReviews} from './actions/review_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.indexBook = indexBook;
  let store;
  let preloadedState = undefined;
 if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        seenSplash: false
      }
    };
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore();
  }

  window.addReviewToReviews = addReviewToReviews
  window.removeReviewFromReviews = removeReviewFromReviews

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={ store }/>, root);
});


// Go live elements
