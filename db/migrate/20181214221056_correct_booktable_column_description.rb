class CorrectBooktableColumnDescription < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :decription, :description
  end
end
