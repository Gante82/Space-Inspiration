var $ = require("jquery");
var url = "http://quotes.rest/qod.json?category=inspire";

module.exports.getInspiringQuote = function (callback) {
    $.ajax({
        url: url,
        success: function (result) {
            callback(result);
        }
    });
}