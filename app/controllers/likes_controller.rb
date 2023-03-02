# frozen_string_literal: true

class LikesController < ApplicationController
  before_action :require_user
  def create
    Like.find_or_create_by!(user_id: current_app_user.id, message_id: message_param_id)

    broadcast_like_counter
  end

  def destroy
    Like.destroy_by(user_id: current_app_user.id, message_id: message_param_id)

    broadcast_like_counter
  end

  private

  def like_params
    params.require(:like).permit(:message_id)
  end

  def message_param_id
    like_params[:message_id]
  end

  def broadcast_like_counter
    @message ||= Message.includes(:likes).find(message_param_id)
    ActionCable.server.broadcast('chatroom_channel',
                                 { message_id: message_param_id, like_count: @message.likes_count })
  end
end
