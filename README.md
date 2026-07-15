# Personal Portfolio Homepage

**Student Name:** Abdullah Farooq

## Objective

The objective of this project is to practice writing clean, semantic HTML and 
organizing a webpage properly, and — starting with the CSS module — to apply 
external CSS styling to build clean, consistent, and visually appealing pages.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)

---

## Day 1 – Personal Portfolio Homepage

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

## Day 2 – Student Portfolio Website

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

## CSS Day 1 — Styled Multi-Page Company Website

### Objective

Apply CSS fundamentals to the existing Multi-Page Company Website (from Day 4) 
using a single external stylesheet, to understand how CSS works with HTML and 
how to build a clean, consistent, and visually appealing site.

### CSS Concepts Used

- External stylesheet (`css/style.css`) linked to all four HTML pages — no 
  inline or internal CSS
- Google Fonts import (`Open Sans` for body text, `Poppins` for headings)
- Universal selector reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- Consistent color palette (brown/green/white theme) applied via background 
  and text colors
- Typography styling for all headings (`h1`–`h6`) and paragraphs, including 
  font size and line height
- Navigation bar styling: default list styling removed, items laid out 
  horizontally with `display: flex`, and hover effects on links
- Margin and padding applied throughout for even spacing and readability
- Image rule (`max-width`, `height: auto`, `display: block`) to keep any 
  future images from overflowing their containers
- Button and link styling with hover states (form submit button, nav links)
- **Bonus Challenge:** Sticky navigation bar using `position: sticky`

### Features Implemented

- All four pages (`index.html`, `about.html`, `services.html`, `contact.html`) 
  now share one external stylesheet at `css/style.css`
- Header and footer styled consistently across every page
- Section-level background and text colors for a clean, professional look
- Contact form's submit button styled with clear default/hover contrast
- Sticky header that stays pinned to the top while scrolling

### Sections Included

1. Header (sticky, with navigation bar)
2. Home: Hero Section, Company Introduction, Featured Services
3. About: Company Overview, Mission, Vision, Team Members
4. Services: 4+ Services (headings, paragraphs, lists)
5. Contact: Contact Information, Office Address, Email, Phone, Contact Form
6. Footer

---

## CSS Day 2 — Box Model & Layout

### Objective

Enhance the Multi-Page Company Website by applying the CSS Box Model and 
improving the overall layout, focusing on spacing, sizing, borders, 
containers, and card-based design.

### CSS Concepts Used

- Box Model applied throughout: consistent margin, padding, and borders on 
  key elements (header, footer, sections, cards)
- Main content container (`.container`) with a max-width of `1200px`, 
  centered on the page using `margin: 0 auto`
- Card layout (`.card`) used for Services, Team Members, and Featured 
  Content, each with border, border-radius, padding, margin, and box-shadow
- Buttons styled with background color, padding, border-radius, hover 
  effect, and cursor pointer
- Navigation bar improvements: spacing between menu items, hover effects, 
  and active-page highlighting (`.active`)
- Clean footer containing copyright, contact information, and social 
  media links
- Consistent image sizing (`width: 300px`, `max-width: 100%`) to prevent 
  overflow
- Custom list marker color on card lists using `::marker`
- **Bonus Challenge:** "Back to Top" button using a plain HTML anchor link 
  (`href="#top"`) and CSS — no JavaScript

### Features Implemented

- All page content wrapped in a centered `.container` for consistent layout 
  across every page
- Services (Services page), Team Members (About page), and Featured 
  Services (Home page) each redesigned as individual `.card` elements 
  instead of plain text blocks
- Active nav link highlighted in green on each page so users can see 
  which page they're on
- Submit button styled with rounded corners, shadow, and a hover color change
- "Back to Top" link added to the bottom of every page's main content, 
  scrolling back to the sticky header

### Sections Included

1. Header (sticky, with navigation bar, active-page highlighting)
2. Home: Hero Section, Company Introduction, Featured Services (cards)
3. About: Company Overview, Mission, Vision, Team Members (cards)
4. Services: 3+ Services (cards)
5. Contact: Contact Information, Office Address, Email, Phone, Contact Form
6. Back to Top button (bonus)
7. Footer

---

## How to Run the Project

1. Clone this repository:
```
git clone https://github.com/ABman-FireBird/TechTide-Internship-Task.git
```
2. Navigate to the relevant task folder:
```
cd Task1            (for Day 1)
cd Day2Task          (for Day 2)
cd Day3Task          (for Day 3)
cd Day4Task          (for Day 4)
cd CSS_Day1Task      (for CSS Day 1)
cd CSS_Day2Task      (for CSS Day 2)
```
3. Open `index.html` in any web browser (double-click the file, or right-click 
   and choose "Open with" your preferred browser). For Day 3, clicking "Submit" 
   will navigate to `thankyou.html` in the same folder. For Day 4, CSS Day 1, 
   and CSS Day 2, use the navigation bar to move between the Home, About, 
   Services, and Contact pages. On CSS Day 2, click "Back to Top" at the 
   bottom of any page to scroll back to the header.

No build steps, servers, or dependencies are required — these are static 
HTML/CSS-only pages.

## Author

**Abdullah Farooq**  
[LinkedIn](https://www.linkedin.com/in/abdullah-farooq-738619302/) | 
[GitHub](https://github.com/ABman-FireBird)
