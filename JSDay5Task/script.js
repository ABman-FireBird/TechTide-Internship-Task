
// Task 1 – Student Names

const students = ["abdullah", "ali", "ahmed", "hanzlah", 'hamza', 'hassan', 'abdul', 'ahsan', 'faiz', 'noufal'];
console.log(students[0]);
console.log(students[9]);
console.log(students.length); 

// Task 2 – Favorite Technologies

const favLanguages = ['Python', 'Javascript', 'C++'];
favLanguages.push('Bash');
favLanguages.pop();
console.log(favLanguages);



// Task 3 – Marks Management

const marks = [100, 100, 94, 99, 90];
let total = 0;
let average = 0;
let highest = marks[0];
let lowest = marks[0];

for (let i=0; i< marks.length ; i++){
    total += marks[i];
    if (marks[i] > highest){
        highest = marks[i];
    }
    if (marks[i] < lowest){
        lowest = marks[i];
    }
}

average = total / marks.length;

console.log('Total: ', total);
console.log('Average: ', average);
console.log('Highest: ', highest);
console.log('Lowest: ', lowest);


// Task 4 – Product List

const products = ['books', 'laptop', 'mobile', 'tv', 'tablet', 'headphones', 'keyboard', 'mouse'];

for (let i=0; i<products.length; i++){
    console.log(products[i]);
}

// Task 5 - Revere An Array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=nums.length - 1; i>=0 ; i--){
    console.log(nums[i]);
}


// Task 6 – Search in Array

const city = ['lahore', 'karachi', 'islamabad', 'pehshawar'];

let user = prompt('Enter a city name to search:');
let found = false;

for (let i=0; i<city.length; i++){
    if (user.toLowerCase() === city[i]){
        found = true;
        break;
    }
}
if (found){
    console.log('City found');
}
else {
    console.log('City not found');
}

// Task 7 – Student Result System

const studentNames = ['Abdullah farooq', 'muhammad abdullah', 'hamza'];
const studentMarks = [60, 80, 100];
let grade = 0;

for (let i=0 ; i<studentNames.length ;  i++){
    console.log('Student Name: ', studentNames[i]);
    console.log('Student Marks: ', studentMarks[i]);
    if (studentMarks[i] >= 90){
        grade = 'A';
    }
    else if (studentMarks[i] >= 80){
        grade = 'B';
    }
    else if (studentMarks[i] >= 70){
        grade = 'C';
    }
    else if (studentMarks[i] >= 60){
        grade = 'D';
    }
    else if (studentMarks[i] < 60) {
        grade = 'F';
    }
    console.log('Student Grade: ', grade);
}



// Task 8 – Mini Shopping Cart

let shoppingCart = ['milk', 'bread', 'eggs', 'cheese', 'butter'];

let addItem = prompt('Enter item to add');
shoppingCart.push(addItem);
alert('Removing an item from the cart');
shoppingCart.pop();

for (let i=0 ; i<shoppingCart.length ; i++){
    console.log(shoppingCart[i]);
}

console.log('Total items in cart: ', shoppingCart.length);


// Bonus Challenge (+5 Marks) - Student Management System

let studentList = [];
const addStudent = (name) => {
    studentList.push(name);
};

const removeStudent = (name) => {
    const index = studentList.indexOf(name);
    if ( index !== -1 ){
        studentList.splice(index, 1);
    }
};

const searchStudent = (name) => {
    let found = false;
    for (let i=0 ; i<studentList.length ; i++){
        if (studentList[i] === name){
            found = true;
            break;
        }
    }
    if (found){
        console.log('Student found');
    }
    else {
        console.log('Student not found');
    }
};

const displayStudents = () => {
    for (let i=0 ; i<studentList.length ; i++){
        console.log(studentList[i]);
    }
};

addStudent('Ali');
addStudent('Hamza');
displayStudents();
searchStudent('Hamza');
removeStudent('Ali');
displayStudents();