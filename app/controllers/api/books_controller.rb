class Api::BooksController < ApplicationController
# before_action :require_logged_in


def index
  @books = Book.includes(:collections).all
  render :index
end

def show
  @book = Book.find(params[:id])
  render :show
end

def update
  @book = Book.find(params[:id])
  render :update
end


end
