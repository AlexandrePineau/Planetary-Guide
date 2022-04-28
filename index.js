// Planets ordered by ascending distance from the Sun
var planet_data = document.getElementById("planet-data")

var mercury = document.getElementById("mercury-img");
var venus = document.getElementById("venus-img");
var earth = document.getElementById("earth-img");
var mars = document.getElementById("mars-img");
var jupiter = document.getElementById("jupiter-img");
var saturn = document.getElementById("saturn-img");
var uranus = document.getElementById("uranus-img");
var neptune = document.getElementById("neptune-img");
var pluto = document.getElementById("pluto-img");

var mercury_state = 0
var venus_state = 0
var earth_state = 0
var mars_state = 0
var jupiter_state = 0
var saturn_state = 0
var uranus_state = 0
var neptune_state = 0
var pluto_state = 0

function resetStyles() {
    mercury.style = "";
    venus.style = "";
    earth.style = "";
    mars.style = "";
    jupiter.style = "";
    saturn.style = "";
    uranus.style = "";
    neptune.style = "";
    pluto.style = "";
}

function resetStates() {
    mercury_state = 0
    venus_state = 0
    earth_state = 0
    mars_state = 0
    jupiter_state = 0
    saturn_state = 0
    uranus_state = 0
    neptune_state = 0
    pluto_state = 0
}

function resetAll() {
    planet_data.innerHTML = "";
    resetStyles();
    resetStates();
}

mercury.addEventListener("click", function () {
    if (mercury_state == 0) {
        resetAll();
        mercury_state = 1;
        planet_data.innerHTML = mercuryData;
        mercury.style.width = "160px";
        mercury.style.height = "160px";
    } else {
        resetAll();
    }
});

venus.addEventListener("click", function () {
    if (venus_state == 0) {
        resetAll();
        venus_state = 1;
        planet_data.innerHTML = venusData;
        venus.style.width = "160px";
        venus.style.height = "160px";
    } else {
        resetAll();
    }
});

earth.addEventListener("click", function () {
    if (earth_state == 0) {
        resetAll();
        earth_state = 1;
        planet_data.innerHTML = earthData;
        earth.style.width = "160px";
        earth.style.height = "160px";
    } else {
        resetAll();
    }
});

mars.addEventListener("click", function () {
    if (mars_state == 0) {
        resetAll();
        mars_state = 1;
        planet_data.innerHTML = marsData;
        mars.style.width = "160px";
        mars.style.height = "160px";
    } else {
        resetAll();
    }
});

jupiter.addEventListener("click", function () {
    if (jupiter_state == 0) {
        resetAll();
        jupiter_state = 1;
        planet_data.innerHTML = jupiterData;
        jupiter.style.width = "160px";
        jupiter.style.height = "160px";
    } else {
        resetAll();
    }
});

saturn.addEventListener("click", function () {
    if (saturn_state == 0) {
        resetAll();
        saturn_state = 1;
        planet_data.innerHTML = saturnData;
        saturn.style.width = "160px";
        saturn.style.height = "160px";
    } else {
        resetAll();
    }
});

uranus.addEventListener("click", function () {
    if (uranus_state == 0) {
        resetAll();
        uranus_state = 1;
        planet_data.innerHTML = uranusData;
        uranus.style.width = "160px";
        uranus.style.height = "160px";
    } else {
        resetAll();
    }
});

neptune.addEventListener("click", function () {
    if (neptune_state == 0) {
        resetAll();
        neptune_state = 1;
        planet_data.innerHTML = neptuneData;
        neptune.style.width = "160px";
        neptune.style.height = "160px";
    } else {
        resetAll();
    }
});

pluto.addEventListener("click", function () {
    if (pluto_state == 0) {
        resetAll();
        pluto_state = 1;
        planet_data.innerHTML = plutoData;
        pluto.style.width = "160px";
        pluto.style.height = "160px";
    } else {
        resetAll();
    }
});