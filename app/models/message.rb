# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :user

  validates :body, length: { minimum: 1, maximum: 240 }
end
