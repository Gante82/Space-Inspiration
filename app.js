const nasa = require("./nasa");
var $ = require("jquery");
var app = {
    run: function () {
        let imgNasa = nasa.getImgNasa(app.processImg);
        app.addToggleBehaviour();
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