// Task 1 – Greeting Function

const greet = (name) => {
    return `Hello, ${name}! Welcome to TechTide Co`;   
}

console.log(greet('Abdullah'));


// Task 2 – Calculator Functions

const add = (a, b) => {
    return a + b;
}

const sub = (a, b ) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    if (b !== 0){
        return a / b;
    }
    return "division by zero not allowed";
}

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));;
console.log(div(10, 5));


// Task 3 – Even or Odd Checker

const evenOddCheck = (num) => {
    if (num % 2 === 0){
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

console.log(evenOddCheck(11));



// Task 4 – Grade Calculator

const gradeCalc = (marks) => {
    if (marks >= 90 && marks <= 100){
        return 'A';
    }
    else if (marks >= 80 && marks <= 89){
        return 'B';
    }
    else if (marks >= 70 && marks <=79){
        return 'C';
    }
    else if (marks >= 60 && marks <= 69){
        return 'D';
    }
    else if (marks < 60){
        return 'F';
    }
    else {
        return 'Invalid Marks';
    }
}

console.log(gradeCalc(85));


// Task 5 – Largest Number

const largestNum = (a, b, c) => {
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else if ( c > a && c > b){
        return c;
    }
}

console.log(largestNum(10, 20, 30));

// Task 6 – Factorial Function

const factorial = (n) => {
    if (n === 0 || n === 1 ){
        return 1;
    }
    else {
        let fact = 1;
        for (let i = 1 ; i <= n ; i++){
            fact = fact * i;
        }
        return fact;
    }
}

console.log(factorial(5));


// Task 7 – Temperature Converter

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));


// Task 8 – Simple Student Result System

const studentName = "Abdullah Farooq";
const calculus = 85;
const oop = 90;
const database = 80;

const totalMarks = (calculus, oop, database) => {
    return calculus + oop + database;
}

const percentage = (total) => {
    return (total / 300) * 100
}

const grade = (percentage) => {
    if (percentage >= 90 && percentage <= 100){
        return 'A';
    }
    else if (percentage >= 80 && percentage <= 89){
        return 'B';
    }
    else if (percentage >= 70 && percentage <=79){
        return 'C';
    }
    else if (percentage >= 60 && percentage <= 69){
        return 'D';
    }
    else if (percentage < 60){
        return 'F';
    }
    else {
        return 'Invalid Percentage';
    }
}

const display = () => {
    const total = totalMarks(calculus, oop, database);
    const percent = percentage(total)
    const finalGrade = grade(percent);
    let status = "";
    if (finalGrade === 'F'){
        status = 'Fail';
    }
    else {
        status = 'Pass';
    }

    return `
        Student Name: ${studentName},
        Total Marks: ${total},
        Percentage: ${percent} %,
        Grade: ${finalGrade}
        Status: ${status}
    `;
}   

console.log(display());

// Task 9 - Bonus Challenge (+5 Marks) - Simple Banking System

let balance = 0;

const deposit = (amount) => {
    if (amount > 0){
        balance += amount;
        return `Deposited: ${amount}. New Balance: ${balance}`;
    }
    return "Enter amount greater than 0";
}

const withdraw = (amount) => {
    if (amount > 0 && amount <= balance){
        balance -= amount;
        return `Withdrawn: ${amount}. New Balance: ${balance}`;
    }
    return "Insufficient balance or invalid amount";
}

const checkBalance = () => {
    return `Current Balance: ${balance}`;
}


console.log(deposit(10000));
console.log(withdraw(5000));
console.log(checkBalance());