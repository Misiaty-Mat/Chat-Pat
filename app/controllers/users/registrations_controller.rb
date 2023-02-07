# frozen_string_literal: true

module Users
  class RegistrationsController < Devise::RegistrationsController
    include UserStatus

    before_action :logged_in_redirect, only: [:new, :create]
    def create
      super
      flash[:alert] = resource.errors.full_messages
    end
  end
end
