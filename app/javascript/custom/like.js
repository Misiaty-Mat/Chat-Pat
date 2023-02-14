export const like = () => {
    $('.likeButton').each(function (_, like) {
    $(like).on("click", function () {
            setTimeout(() => {
                if ($(like).attr('data-turbo-method') === 'post') {
                    $(like).addClass('liked')
                    $(like).attr('data-turbo-method', 'delete')
                } else {
                    $(like).removeClass('liked')
                    $(like).attr('data-turbo-method', 'post')
                }
            }, 10)
        }
    )})
}