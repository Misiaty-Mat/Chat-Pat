# frozen_string_literal: true

class ChatroomController < ApplicationController
  def index
    @message = Message.new
    messages_load
  end

  def index_with_button
    messages_load
  end

  private

  def messages_load
    @messages = Message
                .includes(:user)
                .paginate(page: params[:page], per_page: 10)
                .order('created_at DESC')

    respond_to do |format|
      format.html
      format.js
    end
  end
end
