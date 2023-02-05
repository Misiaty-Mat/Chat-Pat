# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'chatroom#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
end
