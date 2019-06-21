document.getElementById("problem").innerText = `Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`;
    


var found = false
var min = 1
var max = 20

var divisible = 1

while(!found){
    var numbersToCheck = max - (min - 1)
    var checked = 0

    for(var i = min; i <= max; i++){
        if(divisible % i == 0){
            checked++
        }
    }

    if(checked == numbersToCheck){
        console.log(divisible)
        found = true
    } else {
        divisible++
    }
}



document.getElementById("solution").innerText = `The smallest positive number that is evenly divisible by all of the numbers from ${min} to ${max} is ${divisible}`