# frozen_string_literal: true

module Users
  class RegistrationsController < Devise::RegistrationsController
    include UserStatus

    before_action :logged_in_redirect, only: :create
    def create
      super
      flash[:alert] = resource.errors.full_messages
    end
    
    private

    def user_params
      params.require(:user).permit(:username, :email, :password,
                                   :password_confirmation, :current_password, :avatar)
    end
  end
end
