function popUp(){
    var text = prompt('enter messages to display');
    document.getElementById("header-text").innerText=text;
}

/* javascript basic operators */

var var1 =0;

console.log("Result"+var1);

var var2 =0;
++var2;  //var2 =var2+1
console.log("Result"+var2);

var var3 =0;
--var3;  //var3 =var3-1
console.log("Result"+var3);

var var4 =20%2; //modulus operator

console.log("Result"+var4);

var var4 = 20**3; //exponential operator
console.log("Result "+var4);

var var5 = 20;

console.log(var5 == "20"); //equality operator
console.log(var5==="20"); // Strict equality operator on type

console.log(var5 <15); //less than operator

console.log(var5>15);  //greater than operator

console.log(var5 >21 && var5 <19); //logical AND

console.log(var5 >18 || var5 <15); //logical OR






