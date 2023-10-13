//1
let qwer=2;

if (qwer<0){
    console.log("Число есть отрицательное");
} else{
    console.log("Число есть положительное");
}


//2
let string="был пацан и нет пацана";
console.log(string.length);


//3
let string="был пацан и нет пацана";
let lastChar = string[string.length - 1];
console.log(lastChar);


//4
let number = 8;

if (number % 2 === 0) {
    console.log("четное число");
} else {
console.log("нечетное число");
}


//5
let word1 = "Привет";
let word2 = "Пока";

if (word1[0] === word2[0]) {
console.log("первые буквы совпадают");
} else {
console.log("первые буквы не совпадают");
}


//6
let number = 12345;
let numString = number.toString();

let firstDigit = numString[0];
let lastDigit = numString[numString.length - 1];

console.log(parseInt(firstDigit) + parseInt(lastDigit));


//7
let number = 12345;
let numString = number.toString();

let sum = 0
for (let i  = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
}

console.log(sum);