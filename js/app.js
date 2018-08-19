/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var tests = [];
var testTimer = null;

function fixTest(test) {
    var test = tests.pop();
    if (test) {
        test = $(test);
        test.removeClass("fail");
        test.addClass("pass");
        var icon = test.find("i");
        icon.removeClass("fa-times");
        icon.addClass("fa-check");
    }
}

function addFailingTest() {
    var test = $('<div class="test fail"><i class="fas fa-times"></i></div>')
    tests.unshift(test);
    $(".tdd-inner").append(test);
    return test;

}

function between(min, max) {
    return min + Math.floor(Math.random() * max)
}

var waitTimer = setTimeout(function () {

    testTimer = setInterval(function () {

        for (var i = 0; i < between(1, 2); i++) {
            test = addFailingTest();
            setTimeout(function () {
                fixTest(test);
            }, between(500, 1000));
        }

    }, between(800, 1200));
}, 1000);