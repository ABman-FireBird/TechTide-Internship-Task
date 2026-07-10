# Personal Portfolio Homepage

**Student Name:** Abdullah Farooq

## Objective

The objective of this project is to practice writing clean, semantic HTML and 
organizing a webpage properly without using CSS or JavaScript. This assignment 
focuses on correct use of semantic tags, document structure, headings, lists, 
images, and hyperlinks.

## Technologies Used

- HTML5 only (no CSS, no JavaScript)

---

## Day 1 � Personal Portfolio Homepage

### Features Implemented

- Semantic page structure using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`
- Single, properly hierarchical heading structure (`<h1>` to `<h2>`)
- Navigation bar with anchor links to each section
- Hero section introducing the portfolio
- About Me section with a profile image
- Skills section as an unordered list
- Education section as an ordered list, including current GPA
- Contact Information section with working `mailto:` and `tel:` links, 
  plus LinkedIn and GitHub profile links
- Footer with copyright information

### Sections Included

1. Header
2. Navigation Bar
3. Hero Section
4. About Me
5. Skills
6. Education
7. Contact Information
8. Footer

---

## Day 2 � Student Portfolio Website

### Objective

Enhance the Day 1 portfolio into a more structured and informative student 
portfolio, demonstrating additional HTML elements such as tables, nested lists, 
horizontal rules, and line breaks.

### Features Added in Day 2

- Current Semester Courses section using a `<table>` (course name, code, credit hours)
- Hobbies section using **nested unordered lists** (categories with sub-items)
- Social Media Links separated into its own dedicated section
- Horizontal rules (`<hr>`) added between major sections
- Line breaks (`<br>`) used within the About Me paragraph
- Meaningful `alt` text added to all images
- All internal navigation links updated to include new sections

### Sections Included

1. Header
2. Navigation Bar (with working internal links)
3. Hero Section
4. About Me (with Profile Picture)
5. Skills
6. Education
7. Current Semester Courses (Table)
8. Hobbies (Nested Lists)
9. Contact Information
10. Social Media Links
11. Footer

---

## Day 3 — Student Registration Form

### Objective

Build a professional Student Registration Form using HTML only, to understand 
how forms collect user input and how different form elements are used in 
real-world applications.

### Features Implemented

- Registration form organized into four logical `<fieldset>` groups: Personal 
  Information, Academic Information, Account Information, and Additional Information
- Every input paired with a corresponding `<label>` using matching `for`/`id` attributes
- Gender selection using grouped radio buttons (single choice enforced via shared `name`)
- Skills selection using grouped checkboxes (multiple choice, shared `name`, unique `id`s)
- Appropriate input types used throughout: text, email, tel, date, number, password, 
  file, radio, checkbox
- Built-in HTML validation applied where relevant: `required`, `placeholder`, `min`, 
  `max`, `maxlength`
- Dropdown selection (`<select>`/`<option>`) for City and Country
- File upload input restricted to image files (`accept="image/*"`)
- Textarea for a short Bio
- Submit and Reset buttons
- **Bonus:** Second page (`thankyou.html`) linked via the form's `action` attribute, 
  displayed after submission

### HTML Elements Used

`<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>` (text, email, tel, date, 
number, password, radio, checkbox, file, submit, reset), `<select>`, `<option>`, 
`<textarea>`, `<button>`, `<h1>`, `<h2>`, `<p>`, `<br>`

### Sections Included

1. Personal Information
2. Academic Information
3. Account Information
4. Additional Information
5. Thank You Page (bonus)

---

## Day 4 — Multi-Page Company Website

### Objective

Build a professional multi-page company website using HTML only, focusing on 
semantic HTML, page navigation, and organizing a website into multiple 
interlinked pages.

### Features Implemented

- Four fully linked pages: `index.html`, `about.html`, `services.html`, and 
  `contact.html`, connected through a shared navigation bar
- Consistent `<header>` (with company name/logo) and `<footer>` (copyright, 
  contact email, social media links) across every page
- Semantic structure throughout using `<header>`, `<nav>`, `<main>`, 
  `<section>`, `<article>`, and `<footer>`
- **Home Page:** hero section, company introduction, and featured services
- **About Page:** company overview, mission, vision, and team members
- **Services Page:** at least 4 services, each described with headings, 
  paragraphs, and lists
- **Contact Page:** office address, email, phone number, and a contact form
- Images organized under a dedicated `images/` folder
- Clean, consistently indented, semantic HTML with all navigation links 
  working correctly via relative paths

### HTML Elements Used

`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h3>`, 
`<p>`, `<ul>`, `<li>`, `<a>`, `<form>`, `<label>`, `<input>`, `<textarea>`

### Sections Included

1. Header (with navigation bar, on every page)
2. Home: Hero Section, Company Introduction, Featured Services
3. About: Company Overview, Mission, Vision, Team Members
4. Services: 4+ Services (headings, paragraphs, lists)
5. Contact: Contact Information, Office Address, Email, Phone, Contact Form
6. Footer (copyright, contact email, social media links, on every page)

---

## How to Run the Project

1. Clone this repository:
git clone https://github.com/ABman-FireBird/TechTide-Internship-Task.git
2. Navigate to the relevant task folder:
cd Task1        (for Day 1)
cd Day2Task      (for Day 2)
cd Day3Task      (for Day 3)
cd Day4Task      (for Day 4)
3. Open `index.html` in any web browser (double-click the file, or right-click 
   and choose "Open with" your preferred browser). For Day 3, clicking "Submit" 
   will navigate to `thankyou.html` in the same folder. For Day 4, use the 
   navigation bar to move between the Home, About, Services, and Contact pages.

No build steps, servers, or dependencies are required — these are static 
HTML-only pages.

## Author

**Abdullah Farooq**  
[LinkedIn](https://www.linkedin.com/in/abdullah-farooq-738619302/) | 
[GitHub](https://github.com/ABman-FireBird)