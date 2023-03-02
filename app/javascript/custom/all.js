import { submitMessageButtonClick, submitMessageOnEnterPress, closePopupMessage } from "./message";
import { confirmEditUserModal, submitEditUserChanges } from "./confirmEditUserModal";
import { infiniteScrolling } from "./infiniteScrolling";
import { dropdown } from "./dropdown";
import { like } from "./like";

const startCustomFunctions = () => {
    submitMessageButtonClick();
    submitMessageOnEnterPress();
    closePopupMessage();
    infiniteScrolling();
    confirmEditUserModal();
    submitEditUserChanges();
    dropdown();
    like();
}

export default startCustomFunctions