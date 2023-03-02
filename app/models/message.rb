# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates :body, length: { minimum: 1, maximum: 240 }

  def likes_count
    likes.where(message_id: id).count
  end

  def liked?(user)
    return false unless user

    likes.exists?(message_id: id, user_id: user.id)
  end
end
