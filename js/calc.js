var calcString = "";
var display = document.getElementById("display");

document.getElementById("buttons").addEventListener('click', function (event) {
    if (!(event.target.innerHTML == "=" || event.target.id == 'buttons')) {
        calcString += event.target.innerHTML;
        display.innerHTML = calcString;
    }
}), false;

calculate.onclick = function () {
    calcstring = calcString.replace(/[^-()\d/*+.]/g, ''); // sanitize the string to sorta prevent malicious code...
    var result = eval(calcString);
    display.innerHTML = result;
    calcString = result;    
}