# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'chatroom#index'

  post '/message', to: 'messages#create'
  get '/messages_with_button', to: 'chatroom#index_with_button', as: 'messages_with_button'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  mount ActionCable.server, at: '/cable'
end
