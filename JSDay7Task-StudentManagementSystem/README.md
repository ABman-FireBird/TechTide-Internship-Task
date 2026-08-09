# Student Management System

A simple, responsive Student Management System built with **HTML, Tailwind CSS, and vanilla JavaScript**. Built as the Weekend Project for the TechTide Summer Internship 2026.

## Features

**Dashboard**
- Total Students
- Average Marks
- Highest Marks
- Lowest Marks

**Student Registration**
- Form fields: Name, Roll Number, Department, Semester, Email, Marks
- Validates that all fields are filled before submitting
- Checks that marks are between 0 and 100
- Checks that roll numbers are unique
- The same form is reused for editing — clicking "Edit" fills the form and switches the button to "Update Student"

**Student Records**
- Responsive table showing: Name, Roll Number, Department, Semester, Email, Marks, Grade
- Automatic grading based on marks:

  | Marks    | Grade |
  |----------|-------|
  | 90–100   | A     |
  | 80–89    | B     |
  | 70–79    | C     |
  | 60–69    | D     |
  | Below 60 | F     |

**Core actions**
- Add Student
- Edit Student
- Delete Student (with a confirmation prompt before removing)
- Search Student by Name
- Filter Students by Department
- Sort Students by Marks (High to Low / Low to High)

**Bonus features implemented**
- ✅ Save data using Local Storage (records persist after refreshing or closing the browser)
- ✅ Confirmation dialog before deleting a student

## Technologies Used

- **HTML5** — page structure
- **Tailwind CSS** (via CDN) — all styling and responsiveness
- **JavaScript (ES6)** — form handling, validation, CRUD logic, search/filter/sort, dashboard calculations, and Local Storage

No frameworks or libraries (React, Vue, Angular, Bootstrap, jQuery) were used, as required.

## Folder Structure

```
student-management-system/
│
├── index.html          # Page structure: navbar, dashboard, form, table, footer
├── script.js            # All JavaScript logic (CRUD, validation, search/filter/sort, storage)
└── README.md             # This file
```

## How to Run the Project

No installation or build steps needed.

1. Download or clone the repository.
2. Open `index.html` in your browser.

That's it — the app runs entirely in the browser. Any student you add will be saved automatically to Local Storage, so it will still be there the next time you open the page.

## How It Works (Implementation Summary)

- Each student is stored as an **object** (name, roll number, department, semester, email, marks, grade). All students are kept in one **array**, which is the single source of data for the app.
- On form submit, the input is validated (required fields, marks range, unique roll number). If valid, a grade is calculated automatically from the marks and the student is added to the array.
- The same form handles editing: selecting "Edit" loads the student's data into the form and updates that same record on submit instead of adding a new one.
- Deleting a student asks for confirmation first, then removes them from the array.
- The table is re-rendered from the array every time the data changes, so it always shows the current, correct data.
- Search, department filter, and marks sorting work together — they build a filtered/sorted copy of the array and render that, without changing the original data.
- The dashboard (total, average, highest, lowest marks) is recalculated automatically after every add, edit, or delete.
- All data is saved to Local Storage after every change and reloaded automatically when the page opens, so records aren't lost on refresh.

## Screenshots

Desktop and mobile screenshots of this project are included in the PDF report submitted alongside this repository.