export const confirmEditUser = () => {
    $('.ui.basic.modal').modal();

    $('#confirmUserChanges').click(function() {
        $('.ui.basic.modal').modal('show');
    })
}

export const submitEditUserChanges = () => {
    $('#submitEditUser').click(function () {
        $('#editUserForm').submit(function() {
            const currentPassword = $('#currentPasswordInput').val();
            $("<input />").attr("type", "password")
                .attr("name", "user[current_password]")
                .attr("value", currentPassword)
                .appendTo("#editUserForm");
        });
        $("#editUserForm").submit();
    })
}