# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :user

  validates :body, length: { maximum: 240 }
end
