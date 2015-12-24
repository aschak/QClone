class Api::UsersController < ApplicationController

  # before_action :require_user!

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  def update
    @user = current_user

    if params[:tag_ids]
      tags = params[:tag_ids].map {|tag| tag = Tag.find(tag.to_i)}
    else
      tags = []
    end

    if @user.update!(tags: tags)
      render :show
    else
      render json: @user.errors.full_messages, status: "Unprocessable Entity"
    end

  end

  def current_show
    @user = current_user
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :tags)
  end
end
