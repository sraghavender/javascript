var number=0;
var string = "The script has been loaded...";


function changeNumber(){
    document.getElementById('header-number').innerHTML=number;
    console.log('number:'+ number);
}

function increment(){
    number++;
    changeNumber();
    
}

function decrement() {
    number--;
    changeNumber();
}

console.log(string);

// This is comment...
/* This
 is
 also
 comment 
*/
