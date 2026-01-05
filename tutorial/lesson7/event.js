
function doSomething() {
var option = prompt("Enter a color...");
var text ="";

switch(option){
    case "red":
        text ="red";
        break;
    case "blue":
        text ="blue";
        break;
    case "green":
    case "dark green":
        text = "some green color";
        break;
    default :
         text = "unknow color selected";
         break;
}

document.getElementById("header-text").innerHTML=text;

}