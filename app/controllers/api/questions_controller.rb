class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
    @question = Question.new
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: "Unprocessable Entity"
    end

  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: "Unprocessable Entity"
    end
  end

  def destroy
    question = Question.find(params[:id])
    question.destroy
    render json: question
  end

  private

  def question_params
    params.require(:question).permit(:title, :body)
  end
end
