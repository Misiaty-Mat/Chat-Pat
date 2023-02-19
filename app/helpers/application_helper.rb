# frozen_string_literal: true

module ApplicationHelper
  def user_avatar(user, size = 100)
    if user.avatar.attached? && user.valid?
      user.avatar.variant(resize_to_limit: [size, size])
    else
      "https://secure.gravatar.com/avatar/#{Digest::MD5.hexdigest(user.email)}.png?d=mp&s=#{size}"
    end
  end
end
