// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
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

const infiniteScrolling = () => {
    if($('#withButton').children().length > 0) {
        $('.pagination').hide()
        let loading_messages = false

        $('#loadMoreMessages').show().click(function() {
            if(!loading_messages) {
                loading_messages = true
                const more_messages_url = `/messages_with_button?page=${$('.pagination .next_page').attr('href').match(/\d+$/)[0]}`
                const $this = $(this)
                $this.html(
                    `<img src="/assets/loading-5dad85d97ef8fd1f69a5bc3df7a1b01d9ae7b9065a3d8ac09ae534bc1db48ed1.gif"
                          class="ui mini image" 
                          alt="Loading..." 
                          title="Loading..." 
                     />`
                ).addClass('disabled')

                $.getScript(more_messages_url, function() {
                    if($this) $this.html(`<button class="ui primary small basic button">More messages</button>`).removeClass('disabled')
                    loading_messages = false
                })
            }
        })
    }
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
    infiniteScrolling();
});