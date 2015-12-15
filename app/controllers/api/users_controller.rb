class Api::UsersController < ApplicationController

  before_action :require_user!

  def show
    @user = current_user
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
