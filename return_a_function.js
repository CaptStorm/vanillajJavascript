function doProcess(a, b) {
    function displaySum() {
        alert("the sum is " + (a + b));
    }

    function displayDiff() {
        alert("the difference is " + (a - b));
    }
    displaySum();
    return displayDiff;
}

var a = doProcess(89, 88);
a();
