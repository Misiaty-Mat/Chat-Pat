# frozen_string_literal: true

class LikesController < ApplicationController
  before_action :require_user
  def create
    return if Like.exists?(user_id: current_user.id, message_id:)

    Like.create!(user_id: current_user.id, message_id:)

    broadcast_like_counter
  end

  def destroy
    puts like_params
    return unless Like.exists?(like_params)

    Like.destroy_by(user_id: current_user.id, message_id:)

    broadcast_like_counter
  end

  private

  def like_params
    params.require(:like).permit(:message_id)
  end

  def message_id
    like_params[:message_id]
  end

  def broadcast_like_counter
    message = Message.find(message_id)
    ActionCable.server.broadcast('chatroom_channel',
                                 { message_id:, like_count: message.likes_count })
  end
end
