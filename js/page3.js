var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

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

function getBoysAndGirls(){
    for (var i = 0; i < boys.concat(girls).length; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(boys.concat(girls)[i]);
        p.appendChild(text);
        var div = document.getElementById("all");
        div.appendChild(p);
    }
}