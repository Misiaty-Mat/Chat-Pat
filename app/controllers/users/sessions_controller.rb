# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    include UserStatus

    before_action :logged_in_redirect, only: [:new, :create]
  end
end
