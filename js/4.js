document.getElementById("problem").innerText = `Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.`;
    
var digits = 3

var palindromesCollection = []


maxNumber = Math.pow(10, digits) - 1
minNumber = Math.pow(10, digits) / 10

findPalindrome(maxNumber)

var greatest = findGreatest(palindromesCollection)

function findPalindrome(maxNumber){
    for(var i = maxNumber; i >= minNumber; i--){
        for(var j = maxNumber; j >= minNumber; j--){
            let result = j * i
            if(result == reverseNumber(result)) {
                palindromesCollection.push({n1: i, n2: j, result: result})
                
                // console.log(i + " x " + j + " = " + result)
                // palindromes.push(result)
            }
        }
    }
}

function reverseNumber(number){
    number = number.toString();
    return number.split("").reverse().join("")
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function findGreatest(arr){
    let max = arr[0].result;
    for (let i = 1; i < arr.length - 1; ++i) {
        if (arr[i].result > max) {
            max = arr[i];
        }
    }

    return max;
}


document.getElementById("solution").innerText = `The numbers should be between  ${minNumber} and ${maxNumber}.

The larges palindrome made from the product of two ${digits}-digit numbers is: ${greatest.result} which is the product of ${greatest.n1} x ${greatest.n2}.

All the palindromes made from the product of two ${digits}-digit numbers are:\n ${palindromesCollection.map(e => e.n1 + " x " + e.n2 + " = " + e.result).join("\n")}`