var myAge = 3; // Actual human age
let earlyYears = 2; //human years until 2
earlyYears *= 10.5
laterYears = myAge - 2; // years that count after the 2 1st
laterYears *= 4 // years that count after the 2 1st in dog years
console.log(earlyYears)
console.log(laterYears)

var myAgeInDogYears = earlyYears + laterYears // Sum the 0-2 and 2+ years

console.log(myAgeInDogYears)

var myName = 'Joao'.toLowerCase(); //my name lowercased
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);c