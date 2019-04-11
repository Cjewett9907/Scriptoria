


# json.partial! "api/books/book", book: @book
# , review: @book.reviews






json.book do
  json.partial! '/api/books/book', book: @book
  json.reviewIds @book.reviews.pluck(:id)
end

  @book.reviews.each do |review|
    json.partial! '/api/reviews/reviews', review: review
  end
#



# @book.reviews.each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/reviews', review: review
#     end
#   end
# #
# #   json.authors do
# #     json.set! review.author.id do
# #       json.extract! review.author, :id, :username
# #     end
# #   end
# end
