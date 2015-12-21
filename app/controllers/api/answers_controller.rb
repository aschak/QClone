class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.all
  end

  def create
    @answer = current_user.answers.new(answer_params)

    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: "Unprocessable Entity"
    end
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def destroy
    answer = current_user.answers.find(params[:id])
    answer.destroy
    render json: answer
  end

  def update
    @answer = current_user.answers.find(params[:id])

    if @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: "Unprocessable Entity"
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
