
document.getElementById("form").onsubmit = function () {
    var num = document.getElementById("number").value;
    var result = document.getElementById("result");
    var i, mult = 1;
    for (i = 1; i <= num; i++) {
        mult = mult * i;

    }
    result.innerHTML = mult;
    return false;
}

