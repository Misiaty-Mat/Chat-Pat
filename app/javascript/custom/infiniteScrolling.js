export const infiniteScrolling = () => {
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