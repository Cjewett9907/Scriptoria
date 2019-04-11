# json.partial! "api/books/book", book: @book


@books.each do |book|
  json.books do
    json.set! book.id do
      json.partial! "api/books/book", book: book
    end
  end
  if current_user
    json.partial! 'api/collections/collections', book: book
    # json.partial! 'api/reviews/reviews', book: book, review: book.reviews
  end
end


# json.collections do
#   @books.each do |book|
#     book.collections.map do |collection|
#       json.partial! "api/collections/collection", collection: collection
#     end
#   end
# end


# json.bananas 5
