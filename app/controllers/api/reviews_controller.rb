class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if current_user
      @review.user_id = current_user.id
    end

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    @review = Review.find(params[:id])


    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find_by(user_id: current_user.id, book_id: params[:id])

    if @review.destroy
      render "api/reviews/show"
    else
      render json: ["no such id"], status: 404
    end

  end






  def review_params
    params.require(:reviews).permit(:body, :book_id)
  end



end
