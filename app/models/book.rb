class Book < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :read_status, presence: true
  validates :image_url, presence: true
  validates :author, presence: true

  has_many :reviews
  has_many :collections

  # def average_rating
  #   reviews.average(:rating)
  # end


end
