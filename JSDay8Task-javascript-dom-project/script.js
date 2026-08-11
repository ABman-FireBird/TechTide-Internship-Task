//Task 1 - Change Page Content
const h = document.getElementById('heading');
const p = document.getElementById('paragraph');
const b = document.getElementById('button');

b.addEventListener('click', () => {
    h.textContent = 'You clicked on the button!';
    p.textContent = 'You clicked on the button!';
    b.textContent = 'Clicked';
});


//Task 2 - Theme Changer

const light = document.getElementById('light');
const dark = document.getElementById('dark');
const theme = document.getElementById('themeText');

light.addEventListener('click', () => {
    document.body.classList.remove('bg-black', 'text-white');
    document.body.classList.add('bg-white', 'text-black');
    theme.textContent = 'Current Theme: Light';
});

dark.addEventListener('click', () => {
    document.body.classList.remove('bg-white', 'text-black');
    document.body.classList.add('bg-black', 'text-white');
    theme.textContent = 'Current Theme: Dark';
});



//Task 3 - Counter App

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const countDisplay = document.getElementById('counter');
const reset = document.getElementById('reset');
let count = 0;

plus.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

minus.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});



//Task 4 & 5 - Dynamic List with Delete

const input = document.getElementById('input');
const addItemButton = document.getElementById('addItem');
const list = document.getElementById('list');

addItemButton.addEventListener('click', () => {
    if (input.value.trim() === '') return;
    const newItem = document.createElement('li');
    newItem.textContent = input.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('ml-2', 'text-red-500');

    removeButton.addEventListener('click', () => {
        newItem.remove();
    });

    newItem.appendChild(removeButton);
    list.appendChild(newItem);
    input.value = '';
});



// Task 6 - Live Character Count

const textarea = document.getElementById('textarea');
const charCountDisplay = document.getElementById('count');

textarea.addEventListener('input', () => {
    charCountDisplay.textContent = `Character Count: ${textarea.value.length}`;
});





// Mini Project – Interactive Student Profile

const updatedProfile = {
    name: 'Name: Hamza Khaliq',
    department: 'Department: Computer Science',
    semester: 'Semester: 6th',
    skills: 'skills: JavaScript, HTML, CSS',
    profileImage: 'https://placehold.co/150'
};

const name = document.getElementById('name');
const department = document.getElementById('department');
const semester = document.getElementById('semester');
const skills = document.getElementById('skills');
const profileImage = document.getElementById('profileImg');
const updateProfileButton =  document.getElementById('updateProfile');

updateProfileButton.addEventListener('click', () => {
    name.textContent = updatedProfile.name;
    department.textContent = updatedProfile.department;
    semester.textContent = updatedProfile.semester;
    skills.textContent = updatedProfile.skills;
    profileImage.src = updatedProfile.profileImage;
});
