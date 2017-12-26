const nasa = require("./nasa");
var app = {
    run: function () {
        nasa.getImgNasa(app.processImg);
        app.addToggleBehaviour();
    },
    processImg: function (img) {
        document.querySelector(".astro__info h2").innerHTML = img.title;
        document.querySelector(".astro__info p").innerHTML = img.explanation;
        if (img.media_type == "video") {
            document.querySelector(".astro__img").innerHTML += "<iframe src='" + img.url + "'>";
        } else {
            document.querySelector(".astro__img").innerHTML += "<img src='" + img.url + "'>";
        }
    },
    addToggleBehaviour: function () {
        let toggleButton = document.querySelector(".toggle");
        toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(".toggle").classList.toggle("open");
            if (toggleButton.innerHTML == "i") {
                toggleButton.innerHTML = "x";
            } else {
                toggleButton.innerHTML = "i";
            }
            document.querySelector(".toggle").classList.toggle("open");
        });
    }

};
app.run();