// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"
import "channels"
import startCustomFunctions from "custom/all";

$(document).on('turbo:load', () => {
    startCustomFunctions()
});