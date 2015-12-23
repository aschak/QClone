Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :update, :index]
    resources :session, only: [:show]
    resources :questions
    resources :answers, only: [:create, :destroy, :edit, :update, :show, :index]
    resources :comments, only: [:create, :destroy, :edit, :update, :show, :index]
    resources :tags, only: [:new, :create, :index]
  end

  get 'api/current_user', :to => 'api/users#current_show', defaults: {format: :json}
end
