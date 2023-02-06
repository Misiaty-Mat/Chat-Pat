# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  def create
    super
    flash[:alert] = resource.errors.full_messages
  end
end
