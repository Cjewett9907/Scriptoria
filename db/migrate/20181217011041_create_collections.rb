class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.integer :book_id
      t.integer :user_id

      t.timestamps
    end
    add_index :collections, :book_id
    add_index :collections, :user_id
  end
end
