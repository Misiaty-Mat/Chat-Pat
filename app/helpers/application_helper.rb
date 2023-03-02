# frozen_string_literal: true

module ApplicationHelper
  def user_avatar(user)
    if user.avatar.attached? && user.valid?
      user.avatar
    else
      "https://secure.gravatar.com/avatar/#{Digest::MD5.hexdigest(user.email)}.png?d=mp"
    end
  end
end
