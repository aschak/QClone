class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      # render json: ["Created"]
      redirect_to root_url
    else
      # render json: @user.errors.full_messages
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  # def show
  #   @user = current_user
  #   render json: @user
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
