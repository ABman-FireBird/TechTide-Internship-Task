# Abdullah's Software House — TechTide Internship Portfolio

**Student Name:** Abdullah Farooq

## Project Description

This repository contains all tasks completed during the TechTide Summer
Internship 2026, tracking the progression from static HTML pages to a fully
responsive, animated, multi-page company website styled entirely with modern
CSS, and advancing into **Tailwind CSS** utility-first framework projects, 
culminating in an Admin Dashboard application and a fully responsive
E-Commerce Product Page.

## Objective

The objective of this project is to practice writing clean, semantic HTML,
then progressively apply CSS fundamentals, layout techniques, modern
responsive design practices, and finally master **Tailwind CSS** by building 
professional company websites, AI landing pages, admin dashboards, and
e-commerce product pages.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)
- CSS Variables, Flexbox, and CSS Grid
- **Tailwind CSS** (Week 3, via CDN)
- **JavaScript (Vanilla, ES6)** (Week 4, via external `script.js`)
- [Font Awesome](https://fontawesome.com/) (via CDN, for footer social icons)
- Google Fonts (`Open Sans`, `Poppins`, `Playfair Display`, `Inter`, `IBM Plex Mono`)

---

## Day 1 – Personal Portfolio Homepage

### Features Implemented

- Semantic page structure using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`
- Single, properly hierarchical heading structure (`<h1>` to `<h2>`)[cite: 1]
- Navigation bar with anchor links to each section[cite: 1]
- Hero section introducing the portfolio[cite: 1]
- About Me section with a profile image[cite: 1]
- Skills section as an unordered list[cite: 1]
- Education section as an ordered list, including current GPA[cite: 1]
- Contact Information section with working `mailto:` and `tel:` links,[cite: 1]
  plus LinkedIn and GitHub profile links[cite: 1]
- Footer with copyright information[cite: 1]

---

## Day 2 – Student Portfolio Website

### Objective

Enhance the Day 1 portfolio into a more structured and informative student 
portfolio, demonstrating additional HTML elements such as tables, nested lists, 
horizontal rules, and line breaks[cite: 1].

### Features Added in Day 2

- Current Semester Courses section using a `<table>` (course name, code, credit hours)[cite: 1]
- Hobbies section using **nested unordered lists** (categories with sub-items)[cite: 1]
- Social Media Links separated into its own dedicated section[cite: 1]
- Horizontal rules (`<hr>`) added between major sections[cite: 1]
- Line breaks (`<br>`) used within the About Me paragraph[cite: 1]
- Meaningful `alt` text added to all images[cite: 1]
- All internal navigation links updated to include new sections[cite: 1]

---

## Day 3 — Student Registration Form

### Objective

Build a professional Student Registration Form using HTML only, to understand 
how forms collect user input and how different form elements are used in 
real-world applications[cite: 1].

### Features Implemented

- Registration form organized into four logical `<fieldset>` groups[cite: 1]
- Every input paired with a corresponding `<label>` using matching `for`/`id` attributes[cite: 1]
- Gender selection using grouped radio buttons[cite: 1]
- Skills selection using grouped checkboxes[cite: 1]
- Appropriate input types used throughout[cite: 1]
- Built-in HTML validation applied where relevant (`required`, `placeholder`, etc.)[cite: 1]
- Dropdown selection (`<select>`/`<option>`) for City and Country[cite: 1]
- File upload input restricted to image files (`accept="image/*"`)[cite: 1]
- Textarea for a short Bio[cite: 1]
- Submit and Reset buttons[cite: 1]
- **Bonus:** Second page (`thankyou.html`) linked via the form's `action` attribute[cite: 1]

---

## Day 4 — Multi-Page Company Website

### Objective

Build a professional multi-page company website using HTML only, focusing on 
semantic HTML, page navigation, and organizing a website into multiple 
interlinked pages[cite: 1].

### Features Implemented

- Four fully linked pages: `index.html`, `about.html`, `services.html`, and `contact.html`[cite: 1]
- Consistent `<header>` and `<footer>` across every page[cite: 1]
- Semantic structure throughout using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`[cite: 1]

---

## CSS Day 1 to 3 & Final CSS Assignment

### Objective
Apply CSS fundamentals, box models, Flexbox, CSS grid, variables, animations, 
and dark-mode support to turn the multi-page company website into a polished 
responsive project[cite: 1].

---

## Week 3, Day 1 — Tailwind CSS Conversion (Company Website)

### Objective
Rebuild the existing Multi-Page Company Website using **Tailwind CSS** utility classes[cite: 1].

---

## Week 3, Day 2 — Tailwind CSS (AI Landing Page)

### Objective
Build a modern, fully responsive AI solutions landing page using **Tailwind CSS** from scratch[cite: 1].

---

## Tailwind Day 3 Task — Admin Dashboard

### Objective

Build a clean, modern, and fully responsive **Admin Dashboard** layout using **Tailwind CSS**[cite: 1], featuring a collapsible desktop sidebar, top header navigation, responsive metric cards, data tables, and team monitoring sections.

### Features Implemented

- ✅ **Responsive Sidebar:** Dark-themed navigation panel (`bg-gray-900`) hidden on mobile, visible on desktop (`md:flex`), featuring active state indicators and menu links (Dashboard, Users, Projects, Analytics, Messages, Settings, Logout)[cite: 1].
- ✅ **Top Navigation Header:** Includes mobile-responsive brand title, dynamic search input, notification badge indicator (`3` items), and user profile dropdown menu with avatar initials ("AF")[cite: 1].
- ✅ **Statistic Summary Cards:** Grid section showcasing key performance indicators (Total Users: 1,284; Active Projects: 32; Revenue: $48,250; Tasks Completed: 214) with positive/negative metric trends[cite: 1].
- ✅ **Recent Projects Data Table:** Structured table displaying project names, client organizations, status pills (Completed, In Progress, Delayed), deadlines, and animated progress bars[cite: 1].
- ✅ **Team Members Section:** Grid display of internal team members (Hamza Ali, Sara Ahmed, Bilal Khan, Mahnoor Fatima) featuring avatars, job roles, emails, and online/away status indicators[cite: 1].
- ✅ **Recent Activity Feed:** Timeline component tracking system actions, user registrations, and project updates with color-coded markers[cite: 1].
- ✅ **Page Footer:** Copyright mark for Abdullah Farooq[cite: 1].

### Tailwind Utilities Used (Admin Dashboard)

| Category | Tailwind Classes Used | Purpose |
|----------|----------------------|---------|
| **Layout & Flexbox** | `flex`, `flex-col`, `hidden`, `md:flex`, `grid`, `grid-cols-1`, `lg:grid-cols-3` | Dashboard layout and structure |
| **Spacing & Sizing** | `p-4`, `md:p-6`, `space-y-6`, `gap-4`, `w-64`, `h-2` | Internal padding, gaps, and dimensions |
| **Styling & Colors** | `bg-gray-100`, `bg-gray-900`, `text-gray-800`, `bg-blue-600` | Background surfaces and color palettes |
| **Borders & Shadows** | `rounded-lg`, `shadow`, `border`, `border-gray-800` | UI containers, cards, and dividers |
| **Interactivity** | `hover:bg-gray-800`, `transition`, `group-hover:opacity-100` | State transitions and hover effects |

### File Location

- `TailwindDay3Task/index.html` — Admin Dashboard single-file implementation[cite: 1].

---

## Tailwind Day 4 Task — E-Commerce Product Page ("The Bindery" Bookstore)

### Objective

Design and develop a modern, responsive **E-Commerce Product Page** using **Tailwind CSS**, focused on building real-world UI components while strengthening responsive layout, spacing, typography, and reusable design patterns[cite: 1]. Product category chosen: **Books** (fiction, non-fiction, politics, history, and classics).

### Features Implemented

- ✅ **Navigation Bar:** Sticky dark header with brand logo, category links (Fiction, Non-Fiction, History, Classics) hidden on mobile and shown from `md:` breakpoint up, a search bar, and cart/profile icons with a live cart-count badge[cite: 1].
- ✅ **Product Showcase:** Large book cover image with a 4-thumbnail gallery grid, book title, author/genre subtext, star rating with review count, current price, struck-through original price, and a foil-stamped discount badge[cite: 1].
- ✅ **Product Details:** Format selector (Hardcover / Paperback / eBook) standing in for size/color options, a quantity stepper, in-stock status indicator, and an ISBN code in place of a SKU[cite: 1].
- ✅ **Action Buttons:** Add to Cart, Buy Now, and Wishlist buttons, each with distinct hover and transition effects[cite: 1].
- ✅ **Product Features:** Six-icon feature row (Fast Delivery, Warranty, Secure Payment, Easy Returns, Premium Quality, 24/7 Support) on a dark full-width band[cite: 1].
- ✅ **Customer Reviews:** Three review cards, each with a customer avatar, name, star rating, and review text[cite: 1].
- ✅ **Related Products:** Four-card responsive grid, each with a book cover, title, price, and a "View Details" button[cite: 1].
- ✅ **Footer:** Company info, customer support links, quick links, social icons, and a copyright line[cite: 1].

### Tailwind Concepts Used

| Category | Tailwind Classes Used | Purpose |
|----------|----------------------|---------|
| **Flexbox** | `flex`, `items-center`, `justify-between`, `flex-wrap`, `gap-4` | Navbar layout, button rows, card content alignment |
| **Grid** | `grid`, `grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`, `lg:grid-cols-6` | Thumbnail gallery, features row, reviews and related products grids |
| **Responsive Breakpoints** | `sm:`, `md:`, `lg:` prefixes (e.g. `hidden md:flex`) | Collapsing nav links/search on mobile, adjusting grid column counts per screen size |
| **Typography** | `font-display`, `font-mono`, `text-4xl`, `font-bold`, `leading-relaxed`, `tracking-wide` | Custom serif/mono font pairing, heading scale, readable body copy |
| **Color Utilities** | Custom palette: `bg-ink`, `bg-parchment`, `text-burgundy`, `text-gold`, `text-forest` | Brand-specific "leather-bound library" color system defined via `tailwind.config` |
| **Spacing** | `px-4`, `py-14`, `gap-6`, `space-y-5`, `mb-8` | Section and element padding/margins throughout |
| **Shadows** | `shadow-md`, `shadow-lg`, `hover:shadow-xl` | Card elevation and depth on hover |
| **Rounded Corners** | `rounded-lg`, `rounded-full`, `rounded-md` | Cards, avatars, buttons, badges |
| **Hover Effects** | `hover:text-gold`, `hover:border-burgundy`, `hover:bg-burgundy/90` | Interactive feedback on links, buttons, and cards |
| **Transitions** | `transition`, `transition-colors`, `transition-all duration-200` | Smooth state changes on hover/focus |
| **Badges** | Cart count badge, discount badge, in-stock indicator | Small status/notification markers |

### File Location

- `TailwindDay4Task/index.html` — E-Commerce Product Page single-file implementation[cite: 1].

---

## Week 3 Final Assignment — SaaS Landing Page ("Harbor")

## Objective

Design and develop a modern, fully responsive **SaaS Landing Page** using **Tailwind CSS**, demonstrating everything covered across the Tailwind CSS module — responsive layouts, reusable UI components, typography, spacing, Flexbox, Grid, and professional design principles. Theme chosen: **AI SaaS Platform** — "Harbor," a fictional AI copilot that reads, routes, and drafts replies to customer-support conversations.

## Features Implemented

- ✅ **Responsive Navigation Bar:** Logo, nav links, Login button, Get Started button, and a fully mobile-friendly menu built with the checkbox/`peer` technique — no JavaScript required.
- ✅ **Hero Section:** Main heading, short description, two call-to-action buttons, a signature "beacon" hero illustration, and company statistics (Teams onboard, Conversations routed/mo, Average rating).
- ✅ **Features Section:** Six feature cards, each with an icon, title, and description (Smart Routing, Auto-Draft Replies, Sentiment Radar, Knowledge Sync, Clean Hand-off, Live Analytics).
- ✅ **Why Choose Us:** Three reasons to choose Harbor, each with its own icon, in a clean three-column layout.
- ✅ **Pricing Section:** Three pricing cards (Basic, Pro, Enterprise), each with a price, feature list, and CTA button, with the **Pro** plan highlighted as the recommended tier.
- ✅ **Testimonials:** Three customer testimonials, each with an avatar, name, position, and review.
- ✅ **FAQ:** Five frequently-asked questions built with native `<details>`/`<summary>` elements — static UI, no JavaScript.
- ✅ **Contact Section:** UI-only contact form, plus company address, email, and phone number.
- ✅ **Footer:** Company information, quick links, resources, social icons, and copyright line.

## Tailwind Concepts Used

| Category | Tailwind Classes Used | Purpose |
|----------|----------------------|---------|
| **Responsive Breakpoints** | `sm:`, `lg:` prefixes (e.g. `hidden lg:flex`) | Mobile → tablet → desktop layout shifts |
| **Flexbox** | `flex`, `items-center`, `justify-between`, `flex-col` | Nav, buttons, card content alignment |
| **Grid** | `grid`, `sm:grid-cols-2`, `lg:grid-cols-3`, `md:grid-cols-3` | Features, pricing, testimonials, footer layouts |
| **Typography** | `font-display`, `font-mono`, `text-5xl`, `tracking-widest`, `leading-relaxed` | Custom serif/mono font pairing, heading scale, readable copy |
| **Color Utilities** | Custom palette: `bg-navy`, `bg-paper`, `text-beacon`, `text-teal` | Brand "harbor beacon" color system defined via `tailwind.config` |
| **Spacing** | `px-6`, `py-24`, `gap-6`, `space-y-5`, `mt-14` | Section and element padding/margins throughout |
| **Rounded Corners** | `rounded-2xl`, `rounded-full`, `rounded-xl` | Cards, buttons, avatars, badges |
| **Shadows** | `shadow-md`, `shadow-lg`, `hover:shadow-xl` | Card elevation and depth on hover |
| **Hover Effects** | `hover:bg-beacon`, `hover:text-beacon`, `hover:border-beacon/40` | Interactive feedback on links, buttons, cards |
| **Transitions** | `transition-colors`, `transition-transform`, `duration-200/300` | Smooth state changes on hover and FAQ open/close |
| **Gradients** | `bg-gradient-to-r`, `bg-gradient-to-br` (`from-beacon to-teal`, `from-navy to-deep`) | Primary buttons and the recommended Pro pricing card |
| **Icons** | Plain emoji characters (no SVG/icon library) | Feature, pricing, contact, and footer icons |

## Bonus Challenges Completed

- ✅ Responsive mobile navigation menu (CSS-only, no JavaScript)
- ✅ Subtle animations using Tailwind's `transition` and `transform` utilities (hover lifts on cards/buttons, rotate on FAQ open)

## Design Decisions

- **Palette:** a deep navy/teal base (`#0B1E2D`, `#123244`) paired with a warm signal-orange accent (`#FF7A45`) and a muted teal (`#3FA79A`) — evoking a lighthouse/harbor beacon guiding conversations home, rather than a generic SaaS blue-and-purple gradient.
- **Type:** Fraunces (serif) for display headings, Inter for body/UI copy, and IBM Plex Mono for small labels, eyebrows, and stats.
- **Signature element:** the hero's concentric rings and ticket chips converging on a checkmark literalize the product's promise — every conversation is read, routed, and resolved.
- **Icons:** implemented as plain emoji rather than an SVG icon set or icon font, keeping the page dependency-free and easy to read line-by-line.
- **Mobile navigation:** a hidden checkbox with Tailwind's `peer` modifier opens and closes the menu with zero JavaScript.

## File Location

- `index.html` — SaaS Landing Page single-file implementation.

## Week 4, Day 1 — JavaScript Fundamentals

### Objective

Understand the fundamentals of JavaScript and learn how to write, execute, and
debug simple JavaScript programs, using an external `script.js` file linked to
a bare `index.html` page.

### JavaScript Concepts Learned

- Introduction to JavaScript and how it works in the browser
- Variables (`var`, `let`, `const`) and variable scoping
- Data types (String, Number, Boolean)
- Arithmetic and comparison operators
- User input via `prompt()`
- Output via `console.log()` and `alert()`
- Comments for documenting code
- Conditional logic (`if` / `else if` / `else`)
- Basic coding practices: meaningful variable names, clean indentation, avoiding
  variable name collisions across tasks

### Tasks Completed

- ✅ **Task 1 — Personal Information:** Declared variables for Full Name, Age,
  University, Degree Program, Semester, and Favorite Programming Language,
  displayed via `console.log()`.
- ✅ **Task 2 — Simple Calculator:** Took two numbers via `prompt()` and
  displayed Addition, Subtraction, Multiplication, Division, and Modulus.
- ✅ **Task 3 — Student Grade Calculator:** Took marks for 5 subjects and
  calculated Total Marks, Obtained Marks, and Percentage.
- ✅ **Task 4 — Temperature Converter:** Converted Celsius → Fahrenheit and
  Fahrenheit → Celsius.
- ✅ **Task 5 — Age Calculator:** Took a Birth Year and calculated Current Age
  using `Date().getFullYear()`.
- ✅ **Task 6 — Even or Odd Checker:** Determined whether a user-entered number
  is even or odd using the modulus operator.
- ✅ **Task 7 — Positive, Negative, or Zero:** Determined the sign of a
  user-entered number using conditional comparisons.
- ✅ **Bonus Challenge — Student Information System:** Took student name and
  marks via `prompt()`, calculated percentage, assigned a letter grade
  (A+/B/C/D/F), and displayed a formatted summary via `console.log()`.

### File Location

- `script.js` — all seven tasks plus the bonus challenge, in a single external
  JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is written to
  the browser console via `prompt()`/`console.log()`.

---

## Week 4, Day 2 — Conditional Statements

### Objective

Strengthen logical thinking by solving real-world problems using conditional
statements in JavaScript — comparison operators, logical operators, `if`,
`if...else`, `if...else if`, and nested conditions.

### JavaScript Concepts Used

- Comparison Operators (`>=`, `<=`, `===`, `!==`)
- Logical Operators (`&&`, `||`)
- `if` Statement
- `if...else`
- `if...else if`
- Template literals for formatted output
- No loops or functions (not yet covered)

### Tasks Completed

- ✅ **Task 1 — Voting Eligibility:** Took the user's age via `prompt()` and
  displayed whether they are eligible or not eligible to vote.
- ✅ **Task 2 — Even or Odd:** Took a number and used the modulus operator to
  determine whether it is even or odd.
- ✅ **Task 3 — Grade Calculator:** Took marks (0–100) and assigned a letter
  grade (A/B/C/D/F) based on the given ranges.
- ✅ **Task 4 — Largest Number:** Took three numbers and displayed the
  largest of the three using chained comparisons.
- ✅ **Task 5 — Leap Year Checker:** Took a year and correctly determined
  whether it is a leap year, accounting for the century-year exception
  (divisible by 4 and not by 100, unless also divisible by 400).
- ✅ **Task 6 — Login Verification:** Compared user-entered username and
  password against predefined credentials and displayed Login Successful or
  Invalid Username or Password.
- ✅ **Task 7 — Simple Calculator:** Took two numbers and an operator
  (`+`, `-`, `*`, `/`) and displayed the corresponding result.
- ✅ **Bonus Challenge — Student Result System:** Took marks for five
  subjects, calculated the percentage, assigned a grade, and displayed a
  Pass/Fail status alongside a final result summary.

### File Location

- `script.js` — all seven tasks plus the bonus challenge, in a single
  external JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is written
  to the browser console via `prompt()`/`console.log()`.

---

## Week 4, Day 3 — Loops

### Objective

Understand how loops work and how they can be used to automate repetitive
tasks efficiently, using `for`, `while`, and `do...while` loops, nested
loops, and loop control statements in JavaScript.

### JavaScript Concepts Used

- `for` Loop
- `while` Loop
- `do...while` Loop
- Nested Loops
- Loop control statements (`break`, `continue`)
- Template literals for formatted output
- No arrays or functions (not yet covered)

### Tasks Completed

- ✅ **Task 1 — Number Counter:** Displayed numbers from 1 to 100 using both
  a `for` loop and a `while` loop.
- ✅ **Task 2 — Even & Odd Numbers:** Displayed all even numbers and all odd
  numbers from 1 to 100 using the modulus operator.
- ✅ **Task 3 — Multiplication Table:** Took a number via `prompt()` and
  displayed its multiplication table from 1 to 10.
- ✅ **Task 4 — Sum of Numbers:** Calculated and displayed the sum of numbers
  from 1 to 100 using a `for` loop.
- ✅ **Task 5 — Reverse Counting:** Displayed numbers from 100 down to 1
  using a decrementing `for` loop.
- ✅ **Task 6 — Factorial Calculator:** Took a positive number via `prompt()`
  and calculated its factorial using a `for` loop.
- ✅ **Task 7 — Number Guessing Game:** Generated a random number between 1
  and 10 and compared it against a single user guess, displaying Correct
  Guess 🎉 or Wrong Guess. Try Again!
- ✅ **Task 8 — Star Pattern:** Printed an increasing star pattern (1 to 5
  stars per row) using nested `for` loops.
- ✅ **Bonus Challenge — Mini ATM Menu:** Built a repeating menu using a
  `while (true)` loop with options to Check Balance, Deposit Money, Withdraw
  Money, and Exit, updating the balance in real time and validating menu
  input.

### File Location

- `script.js` — all eight tasks plus the bonus challenge, in a single
  external JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is written
  to the browser console via `prompt()`/`console.log()`.

---

## Week 4, Day 4 — JavaScript Functions

### Objective

Understand how functions work in JavaScript and how they help write reusable,
organized, and maintainable code, using function declarations, parameters,
arguments, return statements, arrow functions, and function expressions.

### JavaScript Concepts Used

- What Are Functions?
- Function Declaration
- Function Parameters
- Function Arguments
- Return Statement
- Arrow Functions
- Function Expressions
- No arrays or objects (not yet covered)

### Tasks Completed

- ✅ **Task 1 — Greeting Function:** An arrow function that accepts a name
  and returns a personalized welcome message.
- ✅ **Task 2 — Calculator Functions:** Four separate arrow functions for
  Addition, Subtraction, Multiplication, and Division, each accepting two
  numbers and returning the result (with division-by-zero handling).
- ✅ **Task 3 — Even or Odd Checker:** An arrow function that accepts a
  number and returns whether it is even or odd using the modulus operator.
- ✅ **Task 4 — Grade Calculator:** An arrow function that accepts marks and
  returns a letter grade (A/B/C/D/F) based on the given ranges.
- ✅ **Task 5 — Largest Number:** An arrow function that accepts three
  numbers and returns the largest of the three using chained comparisons.
- ✅ **Task 6 — Factorial Function:** An arrow function that calculates and
  returns the factorial of a given number using a `for` loop.
- ✅ **Task 7 — Temperature Converter:** Two arrow functions — Celsius →
  Fahrenheit and Fahrenheit → Celsius — each returning the converted value.
- ✅ **Task 8 — Simple Student Result System:** Separate arrow functions to
  calculate total marks, percentage, and letter grade, combined in a
  `display()` function that returns a formatted summary including Student
  Name, Total Marks, Percentage, Grade, and Pass/Fail Status.
- ✅ **Bonus Challenge — Simple Banking System:** Arrow functions for
  Deposit, Withdraw, and Check Balance, each returning the updated balance
  after every operation.

### File Location

- `script.js` — all eight tasks plus the bonus challenge, in a single
  external JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is written
  to the browser console via `console.log()`.

---

## Week 4, Day 5 — Arrays

### Objective

Understand how arrays work in JavaScript and how to efficiently store,
access, modify, and manipulate collections of data.

### JavaScript Concepts Used

- Introduction to Arrays
- Creating Arrays
- Accessing Elements (indexing)
- Updating Elements
- Array Properties (`length`)
- Array Methods (`push`, `pop`, `indexOf`, `splice`)
- Iterating Through Arrays with `for` loops
- Arrow functions for reusable array operations

### Tasks Completed

- ✅ **Task 1 — Student Names:** Created an array of 10 student names and
  displayed the first student, the last student, and the total number of
  students.
- ✅ **Task 2 — Favorite Technologies:** Created an array of favorite
  programming technologies, added a new technology with `push`, removed the
  last one with `pop`, and displayed the updated array.
- ✅ **Task 3 — Marks Management:** Created an array of marks for 5 subjects
  and calculated the Total, Average, Highest, and Lowest marks using a
  single `for` loop.
- ✅ **Task 4 — Product List:** Created an array of 8 products and displayed
  each one using a `for` loop.
- ✅ **Task 5 — Reverse Array:** Created an array of numbers from 1 to 10 and
  displayed it in reverse order using a decrementing `for` loop.
- ✅ **Task 6 — Search in Array:** Took a city name via `prompt()` and used a
  loop with a `found` flag to correctly report whether the city exists in
  the array, without printing a false "not found" message on every
  non-matching entry.
- ✅ **Task 7 — Student Result System:** Used two parallel arrays (names and
  marks) and a `for` loop with `if...else if` to display each student's
  Name, Marks, and Grade.
- ✅ **Task 8 — Mini Shopping Cart:** Built a shopping cart array supporting
  Add Item (`push`), Remove Item (`pop`), Display All Items, and Display
  Total Item Count.
- ✅ **Bonus Challenge — Student Management System:** Built a simple system
  using arrays and arrow functions — `addStudent`, `removeStudent` (via
  `indexOf` + `splice`), `searchStudent` (via a `found` flag, avoiding
  repeated "not found" messages), and `displayStudents`.

### File Location

- `script.js` — all eight tasks plus the bonus challenge, in a single
  external JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is written
  to the browser console via `prompt()`/`console.log()`.

---

## Week 5, Day 1 — JavaScript Objects & Mini Student Management System

### Objective

Understand how objects work in JavaScript and how they can be used to
represent real-world entities — creating, accessing, updating, and
organizing data using objects and arrays of objects.

### JavaScript Concepts Used

- Introduction to Objects
- Object Properties
- Object Methods
- Accessing Properties (dot notation)
- Updating Properties
- Nested Objects
- Arrays of Objects
- Arrow functions operating on arrays of objects

### Tasks Completed

- ✅ **Task 1 — Student Object:** Created an object storing Name, Roll
  Number, Semester, Department, and CGPA, and displayed all properties in
  the console.
- ✅ **Task 2 — Employee Object:** Created an employee object and performed
  Update Salary, Update Department, Add Email, and Delete Age operations,
  then displayed the updated object.
- ✅ **Task 3 — Product Inventory:** Created an array of 5 product objects
  (Name, Price, Category, Stock) and displayed each product using a `for`
  loop.
- ✅ **Task 4 — Library Management:** Created an array of 5 book objects
  (Title, Author, Year, Available) and displayed only the currently
  available books using a conditional check inside the loop.
- ✅ **Task 5 — Student Management System:** Created an array of 5 student
  objects (Name, Roll Number, Marks, Grade) and displayed all records in a
  formatted manner.
- ✅ **Task 6 — Company Directory:** Created an array of employee objects
  and displayed each employee's Name, Designation, Department, and Email.
- ✅ **Mini Project — Student Record System:** Built a system using an
  array of student objects with `display()`, `searchStudent(name)` (exact
  match search with early return), `displayTopper()` (tracks the highest
  scorer via comparison), and `averageMarks()` (calculates the class
  average).
- ✅ **Bonus Challenge — Enhanced Student Record System:** Extended the
  Mini Project with `addStudent(name, marks, grade)` (adds a new record via
  `push`), `removeStudent(name)` (removes a record via `splice`),
  `updateStudent(name, marks, grade)` (updates marks and grade for a
  matched student), and `sortStudentsByMarks()` (sorts all records from
  highest to lowest marks using a comparator function).

### File Location

- `script.js` — all six tasks, the Mini Project, and the Bonus Challenge,
  in a single external JavaScript file linked from `index.html`.
- `index.html` — minimal page that loads `script.js`; all output is
  written to the browser console via `console.log()`.

---

## JSDay7Task — Student Management System (Full Project)

### Objective

Apply everything learned so far — variables, conditions, loops, functions,
arrays, and objects — to build a complete, real-world front-end application:
a Student Management System with a dashboard, registration form, and full
CRUD functionality, styled entirely with Tailwind CSS.

### Features Implemented

- ✅ **Dashboard:** Live stats for Total Students, Average Marks, Highest
  Marks, and Lowest Marks, recalculated automatically after every change.
- ✅ **Student Registration Form:** Collects Name, Roll Number, Department,
  Semester, Email, and Marks, with full validation (required fields, marks
  range 0–100, unique roll number).
- ✅ **Student Records Table:** Displays Name, Roll Number, Department,
  Semester, Email, Marks, and an automatically calculated Grade (A–F).
- ✅ **CRUD Operations:** Add, Edit, and Delete students — the same form is
  reused for both adding and editing.
- ✅ **Search, Filter & Sort:** Search by name, filter by department, and
  sort by marks (High to Low / Low to High), all working together.
- ✅ **Bonus — Local Storage:** All student records persist across page
  reloads using `localStorage`.
- ✅ **Bonus — Delete Confirmation:** A confirmation prompt appears before
  a student record is permanently removed.

### JavaScript Concepts Used

- Arrays of objects as the core data model
- Functions for validation, rendering, calculations, and storage
- Loops (`for...of`) for dashboard calculations and rendering
- Conditional logic for validation and grade calculation
- DOM manipulation and event listeners (`submit`, `input`, `change`, `click`)

### File Location

- `JSDay7Task/index.html` — page structure (navbar, dashboard, form, table, footer).
- `JSDay7Task/script.js` — all application logic (CRUD, validation, search/filter/sort, Local Storage).
- `JSDay7Task/README.md` — project-specific documentation.

---

## How to Run the Project

### Option 1: Direct Open in Browser
1. Clone the repository:
   ```bash
   git clone https://github.com/ABman-FireBird/TechTide-Internship-Task.git
   ```
2. Navigate to the desired task folder (e.g., `cd TailwindDay4Task`)[cite: 1].
3. Open `index.html` directly in any web browser[cite: 1].

### Option 2: Live Server (VS Code)
1. Install the "Live Server" extension in VS Code[cite: 1].
2. Right-click on `index.html` and select **Open with Live Server**[cite: 1].

## Author

**Abdullah Farooq**
TechTide Summer Intern 2026[cite: 1]
[LinkedIn](#) | [GitHub](#)

## License

This project is created for educational purposes as part of the TechTide Summer Internship 2026[cite: 1].

---

