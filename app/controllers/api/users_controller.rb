class Api::UsersController < ApplicationController

  # before_action :require_user!

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  def current_show
    @user = current_user
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
