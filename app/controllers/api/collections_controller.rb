class Api::CollectionsController < ApplicationController

  def create
    @collection = Collection.new(collection_params)

    # require_logged_in
    if current_user
      @collection.user_id = current_user.id
    end

    if @collection.save
      render "api/collections/show"
    else
      render json: @collection.errors.full_messages, status: 422
    end

  end

  # def update
  #
  # end

  def destroy
    @collection = Collection.find_by(user_id: current_user.id, book_id: params[:id])

    if @collection.destroy
      render "api/collections/show"
    else
      render json: ["no such id"], status: 404
    end

  end


  def collection_params
    params.require(:collection).permit(:book_id)
  end

end
