json.set! @collection.id do
  json.extract! @collection, :user_id, :book_id
  # add readstatus
  
end
