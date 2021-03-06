document.getElementById("problem").innerText =
`Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.`


let numbers = [];
let limit = 1000;
let sum = 0;

for (let i = 1; i < limit; i++) {
    if(i % 3 == 0 || i % 5 == 0){
        numbers.push(i);
        sum += i;
    }
}
document.getElementById("solution").innerText = `If we list all the natural numbers below ${limit} that are multiples of 3 or 5, we get ${numbers.length} numbers.

The sum of these multiples is ${sum}.

The numbers are: ${numbers.join(", ")}.`;