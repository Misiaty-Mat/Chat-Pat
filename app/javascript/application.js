// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as customPackage from "custom/all"
import "jquery"
import "semantic-ui"
import "channels"

$(document).on('turbo:load', () => {
    customPackage.dropdownFunc();
    customPackage.closePopupMessageFunc();
    customPackage.submitMessageOnEnterPressFunc();
    customPackage.submitMessageButtonClickFunc();
    customPackage.infiniteScrollingFunc();
});