let body = document.getElementsByTagName("body");
let headings = document.getElementsByTagName("h3");


function bgChange() {
    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColorCode += hexNumbers[randomIndex];
        
    }
        document.getElementById("colorCode").innerHTML = hexColorCode;
        document.getElementsByTagName("body")[0].style.backgroundColor =
        "#" + hexColorCode;
   // document.getElementById("colorCode").style.color = "dodgerblue";
}
function black() {
    document.getElementsByTagName("button")[0].style.color = "white";
    document.getElementsByTagName("button")[0].style.backgroundColor = "black";
}
function normal() {
    document.getElementsByTagName("button")[0].style.color = "black";
    document.getElementsByTagName("button")[0].style.backgroundColor = "transparent";
}
