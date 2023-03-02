# frozen_string_literal: true

class ChatroomController < ApplicationController
  def index
    @message = Message.new
    messages_load(1)
  end

  def index_with_button
    messages_load(params[:page])
  end

  private

  def messages_load(page)
    @messages = Message
                .includes(:likes, user: :avatar_blob)
                .order('created_at DESC')
                .paginate(page:, per_page: 10)

    respond_to do |format|
      format.html
      format.js
    end
  end
end
