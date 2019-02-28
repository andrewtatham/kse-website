function experience() {
    var from = new Date(2003, 9, 13, 09, 00);
    var to = new Date();
    var xp = to - from;
    var years = (xp / (1000 * 60 * 60 * 24 * 365.25)) - 1;
    document.getElementById("years").innerHTML = years.toFixed(8);
}

function onload() {
    var myVar = setInterval(experience, 1000);
    experience();
}

onload();
