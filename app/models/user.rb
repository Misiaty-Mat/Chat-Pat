# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :messages
  has_many :likes
  has_one_attached :avatar

  validates :username, presence: true, length: { minimum: 3, maximum: 15 },
                       uniqueness: { case_sensitive: false }

  validate :avatar_file_type

  private

  def avatar_file_type
    return if avatar.blob.content_type.include? 'image'

    errors.add(:avatar, 'must be an image')
  end
end
