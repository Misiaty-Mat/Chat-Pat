# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include UserStatus

  before_action :configure_permitted_parameters, if: :devise_controller?

  def current_app_user
    @current_app_user ||= current_user
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[username avatar])
  end
end
