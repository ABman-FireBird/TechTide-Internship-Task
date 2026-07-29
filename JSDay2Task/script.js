// Task 1: Voting Eligibilty

const age = Number(prompt("Enter your age: "));

if (age >= 18){
    console.log("You are eligble to vote.");
} else {
    console.log("You are not eligble to vote.");
}


// Task 2: Even or Odd Number

const num = Number(prompt("Enter a number to find even / odd."));

if (num % 2 === 0 ){
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Task 3: Grade Calculator 

const marks = Number(prompt("Enter your marks: "));

if (marks >= 90 && marks <= 100){
    console.log("A");
} 
else if (marks >=80 && marks <=89 ){
    console.log("B");
}
 else if (marks >= 70 && marks <= 79){
    console.log("C");
} 
else if (marks >=60 && marks <=69){
    console.log("D");
}
else if (marks < 60){
    console.log("F");
}

// Task 4: Largest Number

const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));
const c = Number(prompt("Enter third number: "));

if ( a > b && a > c ){
    console.log(`${a} is the largest number.`);
}
else if (b > a && b > c){
    console.log(`${b} is the largest number.`);
}
else if (c > a && c > b){
    console.log(`${c} is the largest number.`);
}

// Task 5: Leap Year

const year = Number(prompt("Enter a year to check leap year."));

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


// Task 6: Login Verification

const username = "admin";
const password = "12345";

const userInput = prompt("Enter your username: ");
const passwordInput = prompt("Enter your password: ");

if (userInput === username && passwordInput === password){
    console.log('Login successful.');
}
else {
    console.log('Login failed. Try again.');
}

// Task 7: Simple calculator

const num1 = Number(prompt('Enter first number:'));
const op = prompt('Enter operator (+, -, *, /): ');
const num2 = Number(prompt('Enter second number: '));

if (op === '+'){
    console.log(`Addition Result: ${num1 + num2}`);
}
else if (op === '-'){
    console.log(`Subtraction Result: ${num1 - num2}`);
}
else if (op === '*'){
    console.log(`Multiplication Result: ${num1 * num2}`);
}
else if (op === '/'){
    console.log(`Division Result: ${num1 / num2}`);
}


// Bonus Challenge: Student Result System

const marks1 = Number(prompt("Enter marks for subject 1: "));
const marks2 = Number(prompt('Enter marks for subject 2: '));
const marks3 = Number(prompt('Enter marks for subject 3: '));
const marks4 = Number(prompt('Enter marks for subject 4: '));
const marks5 = Number(prompt('Enter marks for subject 5: '));

const percentage = (marks1 + marks2 + marks3 + marks4 + marks5 ) / 5;

let grade = "";

if (percentage >= 90 && percentage <= 100){
    grade = "A";
}
else if (percentage >= 80 && percentage <= 89){
    grade = "B";
}
else if (percentage >= 70 && percentage <= 79){
    grade = "C";
}
else if (percentage >= 60 && percentage <= 69){
    grade = "D";
}
else if (percentage < 60){
    grade = "F";
}


if (grade === "F"){
    console.log("We regret to inform you that you have failed the exam. Best of luck next time.");
    console.log(`Your percentage is ${percentage} and your grade is ${grade}.`);
}
else {
    console.log('Congratulation! you have passed the exam.');
    console.log(`Your percentage is ${percentage} and your grade is ${grade}.`);
}
