class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.text :decription, null: false
      t.string :read_status, null: false
      t.text :image_url, null: false

      t.timestamps
    end
  end
end
