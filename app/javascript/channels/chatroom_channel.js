import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messagesContainer').append(data.message)
    if (Number.isFinite(data.like_count)) {
      $(`#message${data.message_id} .content .meta .like #likeCount`).text(data.like_count)
    }
  }
});
