import { submitMessageButtonClick, submitMessageOnEnterPress, closePopupMessage } from "./message";
import { infiniteScrolling } from "./infiniteScrolling";
import { dropdown } from "./dropdown";
import { like } from "./like";

const startCustomFunctions = () => {
    submitMessageButtonClick();
    submitMessageOnEnterPress();
    closePopupMessage();
    infiniteScrolling();
    dropdown();
    like();
}

export default startCustomFunctions