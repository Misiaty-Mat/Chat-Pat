# frozen_string_literal: true

module UserStatus
  extend ActiveSupport::Concern

  def require_user
    return if current_app_user

    flash[:alert] = 'You must log in to do this action'
    redirect_to new_user_session_path
  end

  def logged_in_redirect
    return unless current_app_user

    flash[:alert] = 'You are already logged in'
    redirect_to root_path
  end
end
