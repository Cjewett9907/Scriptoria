
#     json.reviews do
#       book.reviews.each do |review|
#       json.set! review.id do
#
#         json.extract! review, :body, :user_id, :book_id
#         # json.partial! "api/collections/collection", collection: collection
#       end
#     end
# end


  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :body, :book_id, :user_id
    end
  end
