# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'chatroom#index'

  post '/message', to: 'messages#create'
  get '/messages_with_button', to: 'chatroom#index_with_button', as: 'messages_with_button'
  delete '/likes', to: 'likes#destroy'

  resources :likes, only: %i[create]

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  mount ActionCable.server, at: '/cable'
end
