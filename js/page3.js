var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var ascOrDesc = true;

window.onload = function () {
    document.getElementById("addboy").addEventListener("click", addBoy);
    document.getElementById("addboy").addEventListener("click", addBoyToAll);
    document.getElementById("addgirl").addEventListener("click", addGirl);
    document.getElementById("addgirl").addEventListener("click", addGirlToAll);
    document.getElementById("removeboy").addEventListener("click", removeBoy);
    document.getElementById("removegirl").addEventListener("click", removeGirl);
    document.getElementById("reverse").addEventListener("click", getBoysAndGirlsInReverse);
    this.document.getElementById("sort").addEventListener("click", getBoysAndGirlsSorted);
}


function getAllBoys() {
    var i;
    for (var i = 0; i < boys.length; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(boys[i]);
        p.appendChild(text);
        var div = document.getElementById("boys");
        div.appendChild(p);
    }
}

function getAllGirls() {
    for (var i = 0; i < girls.length; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(girls[i]);
        p.appendChild(text);
        var div = document.getElementById("girls");
        div.appendChild(p);
    }
}

function getBoysAndGirls() {
    for (var i = 0; i < boys.concat(girls).length; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(boys.concat(girls)[i]);
        p.appendChild(text);
        var div = document.getElementById("all");
        div.appendChild(p);
    }
}

function addBoy() {
    var boy = document.getElementById("newboy").value;
    boys.push(boy);
    var p = document.createElement("p");
    var text = document.createTextNode(boy);
    p.appendChild(text);
    var div = document.getElementById("boys");
    div.appendChild(p);
}

function addGirl() {
    var girl = document.getElementById("newgirl").value;
    girls.push(girl);
    var p = document.createElement("p");
    var text = document.createTextNode(girl);
    p.appendChild(text);
    var div = document.getElementById("girls");
    div.appendChild(p);
}

function addBoyToAll() {
    var boy = document.getElementById("newboy").value;
    var p = document.createElement("p");
    var text = document.createTextNode(boy);
    p.appendChild(text);
    var div = document.getElementById("all");
    div.appendChild(p);
}

function addGirlToAll() {
    var girl = document.getElementById("newgirl").value;
    var p = document.createElement("p");
    var text = document.createTextNode(girl);
    p.appendChild(text);
    var div = document.getElementById("all");
    div.appendChild(p);
}

function removeBoy() {
    if (boys.length > 0) {
        removeAll();
        var radioFirst = document.getElementById("first").checked;
        var radioLast = document.getElementById("last").checked;
        var boysDiv = document.getElementById("boys");
        var boyP = boysDiv.getElementsByTagName("p");


        if (radioFirst == true) {
            boys.shift();
            boyP[0].remove();
        }
        else if (radioLast == true) {
            boys.pop();
            boyP[boyP.length - 1].remove();
        }
        else {
            boys.shift();
            boyP[0].remove();
        }
        getBoysAndGirls();
    }
}


function removeGirl() {
    if (girls.length > 0) {
        removeAll();
        var radioFirst = document.getElementById("first").checked;
        var radioLast = document.getElementById("last").checked;
        var girlsDiv = document.getElementById("girls");
        var girlsP = girlsDiv.getElementsByTagName("p");


        if (radioFirst == true) {
            girls.shift();
            girlsP[0].remove();
        }
        else if (radioLast == true) {
            girls.pop();
            girlsP[girlsP.length - 1].remove();
        }
        else {
            girls.shift();
            girlsP[0].remove();
        }
        getBoysAndGirls();
    }
}

function removeAll() {
    var allDiv = document.getElementById("all");
    Array.prototype.slice.call(allDiv.getElementsByTagName("p")).forEach(
        function (item) {
            item.remove();
            // or item.parentNode.removeChild(item); for older browsers (Edge-)
        });
}

function getBoysAndGirlsInReverse() {
    removeAll();
    for (var i = 0; i < boys.concat(girls).length; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(boys.concat(girls).reverse()[i]);
        p.appendChild(text);
        var div = document.getElementById("all");
        div.appendChild(p);
    }
}

function getBoysAndGirlsSorted() {
    removeAll();
    if (ascOrDesc == true) {
        ascOrDesc = false;
        for (var i = 0; i < boys.concat(girls).length; i++) {
            var p = document.createElement("p");
            var sortArr;
            sortArr = boys.concat(girls).sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });

            var text = document.createTextNode(sortArr[i]);
            p.appendChild(text);
            var div = document.getElementById("all");
            div.appendChild(p);
        }
    }
    else {
        ascOrDesc = true;
        for (var i = 0; i < boys.concat(girls).length; i++) {
            var p = document.createElement("p");
            var sortArr;
            sortArr = boys.concat(girls).sort(function (a, b) {
                return b.toLowerCase().localeCompare(a.toLowerCase());
            });

            var text = document.createTextNode(sortArr[i]);
            p.appendChild(text);
            var div = document.getElementById("all");
            div.appendChild(p);
        }
    }
}