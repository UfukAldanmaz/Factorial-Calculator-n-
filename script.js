//var btn = document.querySelector('button');
//btn.addEventListener('click',
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

//);
 //if (num < 0) return -1; else if (num === 0) return 1; else { return (num * factorialize(num - 1)) };
// //
//var num = window.prompt("Enter a number");
//alert("The result is" + factorialize(num));
/* add output for user   */
// programı kullanıcıyla ilişkilendir// 
//if (num < 0) return -1; else if (num === 0) return 1; else { return (num * factorialize(num - 1)) };//