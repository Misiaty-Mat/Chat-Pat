import { submitMessageButtonClick, submitMessageOnEnterPress, closePopupMessage } from "./message";
import { confirmEditUser, submitEditUserChanges } from "./confirmEditUser";
import { infiniteScrolling } from "./infiniteScrolling";
import { dropdown } from "./dropdown";
import { like } from "./like";

const startCustomFunctions = () => {
    submitMessageButtonClick();
    submitMessageOnEnterPress();
    closePopupMessage();
    infiniteScrolling();
    confirmEditUser();
    submitEditUserChanges();
    dropdown();
    like();
}

export default startCustomFunctions