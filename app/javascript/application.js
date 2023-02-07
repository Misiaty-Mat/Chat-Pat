// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as jquery from "jquery"
import "semantic-ui"
import "channels"


const submitMessageOnEnterPress = () => {
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode === 13) {
            $('#submit_message').click();
        }
    })
}

const submitMessageButtonClick = () => {
    $('#submit_message').on('click', function () {
            setTimeout( () => { $("#message_body").val('') }, 1);
    });
}

$(document).on('turbo:load', () => {
    $('.ui.dropdown').dropdown()

    $('.message .close')
        .on('click', function() {
            $(this).closest('.message')
                   .transition('fade');
        });
    submitMessageOnEnterPress();
    submitMessageButtonClick();
});