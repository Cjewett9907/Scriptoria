class Collection < ApplicationRecord
  validates :user_id, uniqueness: { scope: :book_id }

  belongs_to :book
  belongs_to :user

end
