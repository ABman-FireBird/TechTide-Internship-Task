const departmentNames = {
    cs: "Computer Science",
    it: "Information Technology",
    se: "Software Engineering",
    ds: "Data Science",
    ai: "Artificial Intelligence"
}
const defaultStudents = [
    {
        "name": "Abdullah Farooq",
        "rollNumber": "fa-2023-BSCS-094",
        "department": "cs",
        "semester": "7",
        "email": "abdullahfarooq.dev.cs@gmail.com",
        "marks": 90,
        "grade": 'A',

    },
    {
        "name": "Hamza Khaliq",
        "rollNumber": "fa-2023-BSCS-550",
        "department": "cs",
        "semester": "7",
        "email": "raihamzakharal@gmail.com",
        "marks": 85,
        "grade": 'B',

    },
    {
        "name": "Muhammad Abdullah",
        "rollNumber": "fa-2023-BSCS-087",
        "department": "cs",
        "semester": "7",
        "email": "mabdullahaltaf@gmail.com",
        "marks": 95,
        "grade": 'A',

    },
];


const studentTableBody = document.getElementById('studentTableBody');
const totalStudents = document.getElementById('totalStudents');
const averageMarks = document.getElementById('averageMarks');
const highestMarks = document.getElementById('highestMarks');
const lowestMarks = document.getElementById('lowestMarks');
const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');
const departmentFilter = document.getElementById('filterDepartment');
const sortMarks = document.getElementById('sortMarks');
let editingStudent = null;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const email = document.getElementById('email').value;
    const marks = document.getElementById('marks').value;
    const convertedMarks = Number(marks);

    if (name.trim() === '' || rollNumber.trim() === '' || department.trim() === '' || semester.trim() === '' || email.trim() === '' || marks.trim() === ''){
        alert('Please fill in all fields');
        return;
    }
    if (convertedMarks < 0 || convertedMarks > 100){
        alert('Marks should be between 0 and 100');
        return;
    }

    const duplicate = students.some((student) => {
        if (student.rollNumber.trim() === rollNumber.trim() && student.rollNumber !== editingStudent){
            return true;
        }
    });

    if (duplicate){
        alert('Roll Number already exists');
        return;
    }

    const grade = calculateGrade(convertedMarks);

    const newStudent = {
        "name": name,
        "rollNumber": rollNumber,
        "department": department,
        "semester": semester,
        "email": email,
        "marks": convertedMarks,
        "grade": grade
    };

    if (!editingStudent){
        students.push(newStudent);    
        saveStudents();
    } else {
        for (const student of students){
            if (student.rollNumber === editingStudent){
                const index = students.indexOf(student);
                students[index]  = {...newStudent};
                saveStudents();
                break;

            }
        }
    }
    

    editingStudent = null;
    document.getElementById('submitButton').value = 'Add Student';
    filterStudents();
    updateDashboard();
    form.reset();
});

const calculateGrade  = (marks) => {
    if (marks >= 90){
        return 'A';
    }
    else if (marks >= 80){
        return 'B';
    }
    else if (marks >= 70){
        return 'C';
    }
    else if (marks >= 60){
        return 'D';
    }
    else {
        return 'F';
    }
};


const renderStudents = (array) => {
    studentTableBody.innerHTML = '';
    for (const student of array){
        studentTableBody.innerHTML += `
            <tr class="border-t hover:bg-gray-50 transition">
                <td class="px-4 py-3">${student.name}</td>
                <td class="px-4 py-3">${student.rollNumber}</td>
                <td class="px-4 py-3">${departmentNames[student.department]}</td>
                <td class="px-4 py-3">${student.semester}</td>
                <td class="px-4 py-3">${student.email}</td>
                <td class="px-4 py-3 font-medium">${student.marks}</td>
                <td class="px-4 py-3 font-bold">${student.grade}</td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <button
                        onClick="editStudent('${student.rollNumber}')"
                        class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2 transition">
                        Edit
                    </button>

                    <button
                        onClick="deleteStudent('${student.rollNumber}')"
                        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                        Delete
                    </button>
                </td>
            </tr>
        `   
    }
};


const updateDashboard = () => {
    totalStudents.textContent = students.length;
    if (students.length === 0){
        averageMarks.textContent = 0;
        highestMarks.textContent =0;
        lowestMarks.textContent = 0;
        return;
    }
    let totalMarks = 0;
    for (const student of students){
        totalMarks += student.marks;
    } 
    const result = totalMarks / students.length;
    averageMarks.textContent = result.toFixed(2);

    let highest = students[0].marks;
    for (const student of students){
        if (student.marks > highest){
            highest = student.marks;
        }
    }
    highestMarks.textContent = highest;

    let lowest = students[0].marks;
    for (const student of students){
        if (student.marks < lowest){
            lowest = student.marks;
        }
    }
    lowestMarks.textContent = lowest;
};


const saveStudents = () => {
    localStorage.setItem('students', JSON.stringify(students));
};

const getStudents = () => {
    const storedData = localStorage.getItem('students');

    if (storedData){
        return JSON.parse(storedData);

    }
    return defaultStudents;
};


let students = getStudents();
renderStudents(students);
updateDashboard();


const deleteStudent = (rollNumber) => {
    for (const student of students){
        if (student.rollNumber === rollNumber){
            const index = students.indexOf(student);

            if (confirm('Are you sure you want to delete this student?')){
                students.splice(index, 1);
                if (editingStudent === rollNumber){
                    editingStudent = null;
                }
                alert('Student deleted successfully');
                saveStudents();
                filterStudents();
                updateDashboard();
                break;
            }
        }
    }
};

const editStudent = (rollNumber) => {
    for (const student of students){
        if (student.rollNumber === rollNumber){
            editingStudent = rollNumber;
            document.getElementById('name').value = student.name;
            document.getElementById('rollNumber').value = student.rollNumber;
            document.getElementById('department').value = student.department;
            document.getElementById('semester').value = student.semester;
            document.getElementById('email').value = student.email;
            document.getElementById('marks').value = student.marks;

            document.getElementById('submitButton').value = 'Update Student';
            break;

        }
    }
};


const filterStudents = () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const departmentValue = departmentFilter.value;

    const filteredStudents = students.filter( (student) => {
        let matchesSearch = false, matchesDepartment = false;

        if (student.name.toLowerCase().includes(searchValue)){
            matchesSearch =  true;
        }
        if (departmentValue === 'all' || student.department === departmentValue){
            matchesDepartment =  true;
        }

        return matchesSearch && matchesDepartment;
    });


    const sortValue = sortMarks.value;
    if (sortValue === 'high'){
        filteredStudents.sort( (a, b) => b.marks - a.marks);
    }
    if (sortValue === 'low'){
        filteredStudents.sort( (a, b) => a.marks - b.marks);
    }

    renderStudents(filteredStudents);
};


searchInput.addEventListener("input", filterStudents);
departmentFilter.addEventListener("change", filterStudents);
sortMarks.addEventListener('change', filterStudents);
