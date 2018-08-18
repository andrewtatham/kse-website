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

function fixTest() {
    var test = tests.pop();
    if (test) {
        test = $(test);
        test.removeClass("fail");
        test.addClass("pass");
        var icon = test.find("i");
        icon.removeClass("fa-times");
        icon.addClass("fa-check");
        console.log(test);  
    } else {
        clearInterval(testTimer);
    }
}

function addFailingTest() {
    var test = $('<div class="test fail"><i class="fas fa-times"></i></div>')
    console.log(test);  
    tests.push(test);
    $(".tdd").append(test);
}
 


for (var i = 0; i < 100; i++) {
    addFailingTest();
}


var waitTimer = setTimeout(function () {
    testTimer = setInterval(function () {
        addFailingTest();
        shuffle(tests);        
        for (var i = 0; i < 2; i++) {
            fixTest();        
        }


    }, 100);
}, 1000);