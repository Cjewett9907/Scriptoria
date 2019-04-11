class UpdateCollections < ActiveRecord::Migration[5.2]
  def change

    change_table :collections do |t|

      change_column_null :collections, :user_id, false
      change_column_null :collections, :book_id, false
    end
    add_index :collections, [:book_id, :user_id], unique: true
  end
end
