var $ = require ("jquery");
var url = "https://api.nasa.gov/planetary/apod?api_key=dOOLKnO3OFjfmExrgunSmBIdgPxQydBybkTAj5VS";

module.exports.getImgNasa = function (callback) {
  $.ajax({
    url: url,
    success: function(result) {
    callback(result);
  }
  });
}