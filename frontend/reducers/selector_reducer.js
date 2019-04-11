
export const selectUserBooks = (state, userId) => {
  return Object.values(state.entities.books)
  .filter( book => book.user_id === userId)
  .map ( book => state.entities.users[book.book_id])
}


export const selectBook = ({ books }, bookId) => {
  return books[bookId] || { reviewIds: [] };
};

export const selectReviewsForBook = ({ books, reviews }, book) => {
  return book.reviewIds.map(reviewId => reviews[reviewId]);
};
export const asArray = ({ books }) => (
  Object.keys(books).map(key => books[key])
);



// albums container
// export const selectAlbumArtists = (state, albumId) => {
//   return Object.values(state.entities.artistAlbums)
//   .filter(artistAlbum => artistAlbumn.album_id === albumId)
//   .map(artistAlbumn => state.entities.artists[artistAlbum.artist_id])
// }
//
//
//
// export const selectBench = ({ benches }, benchId) => {
//   return benches[benchId] || { reviewIds: [] };
// };
//
// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
// export const asArray = ({ benches }) => (
//   Object.keys(benches).map(key => benches[key])
// );
