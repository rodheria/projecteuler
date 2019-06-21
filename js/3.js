document.getElementById("problem").innerText = `Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?`


var target = 600851475143
var number = target
var result = []

while(number % 2 == 0){
    result.push(2)
    number /= 2
}

for(i = 3; i <= Math.sqrt(number); i += 2){
    while(number % i == 0){
        result.push(i)
        number /= i
    }
}

if(number > 2){
    result.push(number)
}



console.log(result)




document.getElementById("solution").innerText = `The prime factors of ${target} are ${result.join(", ")}.

The largest prime factor of ${target} is ${result[result.length - 1]}.`