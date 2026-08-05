// Task 1 – Student Object

const student = {
    "name": "Abdullah Farooq",
    "rollNumber": 12345,
    "semester": 6,
    "department": "Computer Science",
    "cgpa": 3.68
};

console.log(student);



// Task 2 – Employee Object

let employee = {
    "name": "Abdullah Faroooq",
    "age": 20,
    "position": "Software Engineer",
    "salary": 100000,
    "department": "Development"
};

employee.salary = 120000;
employee.department = "IT";
employee.email = "abdullahfarooq.dev.cs@gmail.com";
delete employee.age;

console.log(employee);



// Task 3 – Product Inventory

const products = [
    {
        "name": "Laptop",
        "price": 50000,
        "category": "Electronics",
        "stock": 5
    },
    {
        "name": "Mouse",
        "price": 500,
        "category": "Accessories",
        "stock": 10
    },
    {
        "name": "Computer",
        "price": 70000,
        "category": "Electronics",
        "stock": 15
    },
    {
        "name": "Mouse Pad",
        "price": 500,
        "category": "Accessories",
        "stock": 20
    },
    {
        "name": "GPU",
        "price": 500000,
        "category": "Electronics",
        "stock": 7
    },
];

for (let i=0 ; i<products.length ; i++){
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log(`Category: ${products[i].category}`);
    console.log(`Stock: ${products[i].stock}`);
    console.log("\n");
}



// Task 4 – Library Management

const books = [
    {
        "Title": "Metamorphosis",
        "Author": "Franz Kafka",
        "Year": 1920,
        "Available": true
    },
    {
        "Title": "Animal Farm",
        "Author": "George Orwell",
        "Year": 1945,
        "Available": true
    },
    {
        "Title": "Notes From Underground",
        "Author": "Fyodor Dostoevsky",
        "Year": 1969,
        "Available": false
    },
    {
        "Title": "Nine Lives Of Pakistan",
        "Author": "Declan Walsh",
        "Year": 2022,
        "Available": false
    },
    {
        "Title": "Thousand Splendid Suns",
        "Author": "Khaled Hosseini",
        "Year": 2007,
        "Available": true
    },
];

for (let i=0; i<books.length ; i++){
    if (books[i].Available){
        console.log(`Title: ${books[i].Title}`);
        console.log(`Author: ${books[i].Author}`);
        console.log(`Year: ${books[i].Year}`);
        console.log("\n");
    }
}



// Task 5 – Student Management System

const students = [
    {
        "name": "Abdullah Farooq",
        "rollNumber": 94,
        "marks": 100,
        "grade": "A+"
    },
    {
        "name": "Hamza Khaliq",
        "rollNumber": 550,
        "marks": 90,
        "grade": "A"
    },
    {
        "name": "Muhammad Abdullah",
        "rollNumber": 97,
        "marks": 85,
        "grade": "B+"
    },
    {
        "name": "Muhammad Abdul Rehman",
        "rollNumber": 107,
        "marks": 80,
        "grade": "B"
    },
    {
        "name": "Faiz Fareed",
        "rollNumber": 111,
        "marks": 75,
        "grade": "B-"
    },
];

for (let i=0 ; i< students.length ; i++){
    console.log(`Name: ${students[i].name}`);
    console.log(`Roll Number: ${students[i].rollNumber}`);
    console.log(`Marks: ${students[i].marks}`);
    console.log(`Grade: ${students[i].grade}`);
    console.log("\n");
}




// Task 6 – Company Directory

const employees = [
    {
        "name": "Abdullah Farooq",
        "designation": "Principal Software Engineer",
        "department": "Site Reliability Engineering",
        "email": "abdullahfarooq.dev.cs@gmail.com"
    },
    {
        "name": "Muhammad Abdullah",
        "designation": "Lead Software Engineer",
        "department": "AI First Front-End Development",
        "email": "mabdullahaltaf@gmail.com"
    },
    {
        "name": "Hamza Khaliq",
        "designation": "Senior Software Engineer",
        "department": "AI Model Development and statistical analysis",
        "email": "raihamzakharal@gmail.com"
    },
];

for (let i=0; i<employees.length ; i++){
    console.log(`Name: ${employees[i].name}`);
    console.log(`Designation: ${employees[i].designation}`);
    console.log(`Department: ${employees[i].department}`);
    console.log(`Email: ${employees[i].email}`);
    console.log('\n');
}



// Mini Project – Student Record System

const studentRecords = [
    {
        "name": "Abdullah Farooq",
        "marks": 100,
        "grade": "A+"
    },
    {
        "name": "Hamza Khaliq",
        "marks": 90,
        "grade": "A"
    },
    {
        "name": "Muhammad Abdullah",
        "marks": 85,
        "grade": "B+"
    },
    {
        "name": "Muhammad Abdul Rehman",
        "marks": 80,
        "grade": "B"
    },
    {
        "name": "Faiz Fareed",
        "marks": 75,
        "grade": "B-"
    },
];

const display = () => {
    for (let i=0 ; i<studentRecords.length ; i++){
        console.log(`Name: ${studentRecords[i].name}`);
        console.log(`Marks: ${studentRecords[i].marks}`);
        console.log(`Grade: ${studentRecords[i].grade}`);
        console.log(`\n`);
    }
}

const searchStudent = (name) => {
    for (let i=0 ; i<studentRecords.length ; i++){
        if (studentRecords[i].name.toLowerCase() === name.toLowerCase()){
            console.log(`Student found: ${studentRecords[i].name}`);
            console.log(`Marks: ${studentRecords[i].marks}`);
            console.log(`Grade: ${studentRecords[i].grade}`);
            return;
        }
    }
}


const displayTopper = () => {

    let topper = studentRecords[0];
    for (let i=0 ; i<studentRecords.length; i++){
        if (studentRecords[i].marks > topper.marks){
            topper = studentRecords[i];
        }
    }
    console.log(`Topper: ${topper.name}`);
    console.log(`Marks: ${topper.marks}`);
    console.log(`Grade: ${topper.grade}`);
    console.log('\n');
}

const averageMarks = () => {
    let marks = 0;
    for (let i=0; i<studentRecords.length ; i++){
        marks += studentRecords[i].marks;
    }
    const average = marks / studentRecords.length;
    console.log(`Average Marks: ${average}`);
}

display()
searchStudent("Abdullah Farooq")
displayTopper();
averageMarks();




// Bonus Challenge (+5 Marks)


const addStudent = (name, marks, grade) => {
    const newStudent = {
        "name": name,
        "marks": marks,
        "grade": grade
    };
    studentRecords.push(newStudent);
}

const removeStudent = (name) => {
    for (let i=0; i<studentRecords.length ; i++){
        if (studentRecords[i].name.toLowerCase() === name.toLowerCase()){
            studentRecords.splice(i, 1);
        }
    }   
}

const updateStudent = (name, marks, grade) => {
    for (let i=0; i<studentRecords.length ; i++){
        if (studentRecords[i].name.toLowerCase() === name.toLowerCase()){
            studentRecords[i].marks = marks;
            studentRecords[i].grade = grade;
        }
    }
}

const sortStudentsByMarks = () => {
    studentRecords.sort((a, b) => b.marks - a.marks);
}  


addStudent("Hassan Mehmood", 88, "B+");
updateStudent("Faiz Fareed", 82, "B");
removeStudent("Hamza Khaliq");
sortStudentsByMarks();
display(); 