export const confirmEditUserModal = () => {
    $('#confirmChangesButton').modal();

    $('#confirmUserChanges').click(function() {
        $('#confirmChangesButton').modal('show');
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