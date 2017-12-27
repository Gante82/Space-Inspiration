const nasa = require("./nasa");
const theySaidSo = require("./theysaidso");
var $ = require("jquery");
var app = {
    run: function () {
        app.addToggleBehaviour();
        nasa.getImgNasa(app.processImg);
        theySaidSo.getInspiringQuote(app.processQuote);
    },
    processImg: function (img) {
        document.querySelector(".astro__info h2").innerHTML = img.title;
        document.querySelector(".astro__info p").innerHTML = img.explanation;
        if (img.media_type == "video") {
            document.querySelector(".astro__info").innerHTML += "<iframe src='" + img.url + "'>";
        } else {
            // document.querySelector(".astro__info").innerHTML += "<img src='"+img.url+"'>";
            $(".astro__img").css("background-image", "url(" + img.url + ")");
        }
    },
    processQuote: function (quote) {
        document.querySelector(".quote__text").innerHTML = quote.contents.quotes[0].quote;
        document.querySelector(".quote__author").innerHTML = quote.contents.quotes[0].author;
    },
    addToggleBehaviour: function () {
        let toggleButton = document.querySelector(".toggle");
        toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            toggleButton.classList.toggle("open");
            if (toggleButton.innerHTML == "i") {
                $(".astro__info").show();
                toggleButton.innerHTML = "x";
            } else {
                toggleButton.innerHTML = "i";
                $(".astro__info").hide();
            }
        });
    }

};
app.run();