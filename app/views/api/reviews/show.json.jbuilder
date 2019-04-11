# json.set! @review.id do
#   json.extract! @review, :body, :user_id, :book_id
# end


# json.review do
#   json.partial! '/api/reviews/reviews', review: review
# end



# json.average_rating @review.bench.average_rating


  # json.reviews do
    # json.set! review.id do
      json.partial! 'api/reviews/reviews', review: @review
    # end
  # end

  # json.authors do
  #   json.set! review.author.id do
  #     json.extract! review.author, :id, :username
  #   end
  # end
