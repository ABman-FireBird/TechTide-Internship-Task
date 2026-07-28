// Task 1: Personal Information

const name = "Abdullah Farooq";
const age = 20;
const university = "Lahore Garrson University";
const degree = "BSCS";
const semester = "6th Semester";
const favLanguage = "Python";
console.log(name + " " + age + " " + university + " " + degree + " " + semester + " " + favLanguage);

// Task 2: Simple Calculator

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));


// Task 3: Student Grade Calculator

const marks1 = Number(prompt('Enter marks for first subject:'));
const marks2 = Number(prompt('Enter marks for second subject:'));
const marks3 = Number(prompt('Enter marks for third subject:'));
const marks4 = Number(prompt('Enter marks for fourth subject:'));
const marks5 = Number(prompt('Enter marks for fifth subject:'));

const total = 500;
const obtained = marks1 + marks2 + marks3 + marks4 + marks5;
const percentage = (obtained / total) * 100;
console.log("Total Marks: ", total);
console.log("Obtained Marks: ", obtained);
console.log("Percentage: ", percentage);


// Task 4: Temperature Converter

const celsius = Number(prompt("Enter Temperature in celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
console.log("Temperature in Fahrenheit: " + fahrenheit);

const fahrenheitInput = Number(prompt('Enter Temperature in Fahrenheit'));
const celsiusConverted = (fahrenheitInput - 32) * 5/9;
console.log("Temperature in Celsius: " + celsiusConverted);

// Task 5: Age Calculator

const year = Number(prompt("Enter your birth year:"));
const currentYear = new Date().getFullYear();
const age1 = currentYear - year;
console.log("Your age is: ", age1);

// Task 6: Even Odd Number

const num = Number(prompt("Enter a number:"));

if (num % 2 === 0){
    console.log("Number is even");
}

else if (num % 2 !== 0 ){
    console.log("Number is odd");
}


//Task 7: Positive, Negative or Zero

const n = Number(prompt("Enter a number:"));

if (n < 0){
    console.log("Number is negative");
}
else if  (n > 0){
    console.log("Number is positive");
}

else if (n === 0){
    console.log("Number is zero");
}

// Bonus Task: Simple Student Information System

const firstName = prompt('Enter your name:');
const marksFirst = Number(prompt('Enter your marks:'));
const marksSecond = Number(prompt('Enter your marks:'));
const marksThird = Number(prompt('Enter your marks:'));

const totalMarks = 300;
const obtainedMarks = marksFirst + marksSecond + marksThird;
const percentageMarks = (obtainedMarks / totalMarks) * 100;
let grade = "";

if (percentageMarks >= 80){
    grade = "A+";
}
else if (percentageMarks >= 70){
    grade = "B";
}
else if (percentageMarks >= 60){
    grade = "C";
}
else if (percentageMarks >= 50){
    grade = "D";
}
else{
    grade = "F";
}

console.log("Formatted Summary");
console.log("Name: " + firstName);
console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentageMarks + "%");
console.log("Grade: ", grade);