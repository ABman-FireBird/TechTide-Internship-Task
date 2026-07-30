// Task 1: Number Counter

for (let i = 1; i <= 100 ; i++){
    console.log(i);
}

let i = 1; 

while (true){
    console.log(i);
    i++;
    if (i > 100){
        break;
    }
}

// Task 2 – Even & Odd Numbers

console.log("Even Numbers: ")
for (let i = 1; i <= 100; i++){
    if ( i % 2 === 0){
        console.log(i)
    }
}

console.log("Odd Numbers: ")
for (let i=1 ; i<=100 ; i++){
    if ( i % 2 !== 0){
        console.log(i)
    }
}


// Task 3 Multiplication Table
const num = Number(prompt("Enter a number to display its multiplication table: "));

for (let i = 1 ; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// Task 4 Sum Of Numbers

let sum = 0;
for (let i = 1 ; i<= 100 ; i++){
    sum += i;
}

console.log(`The sum of numbers from 1 to 100 is: ${sum}`);


// Task 5 Reverse Counting

for (let i = 100 ; i >= 1 ; i--){
    console.log(i);
}


// Task 6 Factorial Calculator

const number = Number(prompt('Enter a number to calculate its factorial'));

let fact = 1;

for (let i = 1; i <= number ; i++){
    fact = fact * i;
}

console.log(`The factorial of ${number} is: ${fact}`);

// Task 7 Number guessing Game

const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = Number(prompt('Guessa a number between 1 and 10'));

if (userGuess === randomNumber){
    console.log('Correct Guess 🎉');
} else {
   console.log('Wrong Guess. Try Again!')
}


//Task 8 Star Pattern

for (let i = 1 ; i<=5 ; i++){
    let str = "";
    for ( let j = 1; j<=i ; j ++){
        str += "*";    
    }
    console.log(str)
}


//Bonus Challenge  Create a mini ATM Menu using loops.

let balance = 10000.0;

while (true){
    const choice = prompt('Welcome to the Mini ATM Menu:\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit\nPlease enter your choice (1-4):');
    if (choice === '1'){
        console.log(`Your current balance is: $${balance}`);
    }
    else if(choice === '2'){
        console.log('You have chosen to withdraw money.');
        const withdrawAmount = Number(prompt('Enter the amount to withdraw:'));
        balance -= withdrawAmount;
        console.log(`Your current balance is: $${balance}`);
    }
    else if (choice === '3'){
        console.log('You have chosen to deposit money.');
        const depositAmount = Number(prompt('Enter the amount to deposit:'));
        balance += depositAmount;
        console.log(`Your current balance is: $${balance}`);
    }
    else if (choice === '4'){
        console.log('GoodBye!');
        break;
    }
    else {
        console.log('Invalid Input. Please enter a valid choice (1-4');
    }
}