class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def new
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: "Unprocessable Entity"
    end

  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name)
  end

end
