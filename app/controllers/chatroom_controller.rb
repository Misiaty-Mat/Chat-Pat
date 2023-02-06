# frozen_string_literal: true

class ChatroomController < ApplicationController
  def index
    @messages = Message.all.includes(:user)
  end
end
