export const submitMessageOnEnterPress = () => {
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode === 13) {
            $('#submit_message').click();
        }
    })
}

export const submitMessageButtonClick = () => {
    $('#submit_message').on('click', function () {
        setTimeout( () => { $("#message_body").val('') }, 1);
    });
}

export const closePopupMessage = () => {
    $('.message .close')
        .on('click', function() {
            $(this).closest('.message')
                .transition('fade');
        });
}