var states = document.getElementById("00N4x00000W6d9H");
states.style.display = "none";
var country = document.getElementById("00N4x00000W6d9M");
country.onchange = changeStateDisplay;


function changeStateDisplay() {
    var country = document.getElementById("00N4x00000W6d9M");
    var countryValue = country.value;


    if (countryValue == "United States of America") {
        document.getElementById("00N4x00000W6d9H").style.display = "";
    }
}