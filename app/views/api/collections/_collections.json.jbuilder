

    json.collections do
      current_user.collections.each do |collection|
      json.set! collection.id do

        json.extract! collection, :user_id, :book_id
        # add readstatus
        # json.partial! "api/collections/collection", collection: collection
      end
    end
end
