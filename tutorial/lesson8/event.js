let isTurnedOn = true;
let eneryConsumed =0
while(isTurnedOn && eneryConsumed < 5) {
    console.log("The light is turned on...")
    ++eneryConsumed;
    if(eneryConsumed ==3){
        console.log("power outage...");
        break;
    }
    console.log("energy consumed: "+eneryConsumed);
}

console.log("running out of power, turning off.");


do{
 console.log("turning off: "+eneryConsumed)
 --eneryConsumed;
} while(eneryConsumed >= 0);  

eneryConsumed =0;

while(isTurnedOn && eneryConsumed < 5) {
    console.log("The light is turned on...")
    ++eneryConsumed;
    if(eneryConsumed ==3){
        console.log("power outage...");
        continue;
        
    }
    console.log("energy consumed: "+eneryConsumed);
}

console.log("running out of power, turning off.");
