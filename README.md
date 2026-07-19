# Abdullah's Software House — TechTide Internship Portfolio

**Student Name:** Abdullah Farooq

## Project Description

This repository contains all tasks completed during the TechTide Summer
Internship 2026, tracking the progression from static HTML pages to a fully
responsive, animated, multi-page company website styled entirely with modern
CSS — including CSS variables, Flexbox, Grid, media queries, and a pure-CSS
dark mode toggle.

## Objective

The objective of this project is to practice writing clean, semantic HTML,
then progressively apply CSS fundamentals, layout techniques, and modern
responsive design practices to build a professional, polished company
website — "Abdullah's Software House" — from the ground up.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)
- CSS Variables, Flexbox, and CSS Grid (Final Assignment)
- [Font Awesome](https://fontawesome.com/) (via CDN, for footer social icons)
- Google Fonts (`Open Sans` and `Poppins`)

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
- Clean, consistently indented, semantic HTML with all navigation links 
  working correctly via relative paths

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

- External stylesheet (`css/styles.css`) linked to all four HTML pages — no 
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
- Image rule (`max-width`, `height: auto`, `display: block`) to keep images 
  from overflowing their containers
- Button and link styling with hover states (form submit button, nav links)
- **Bonus Challenge:** Sticky navigation bar using `position: sticky`

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
- Main content container (`.container`) with a max-width, centered on the 
  page using `margin: 0 auto`
- Card layout (`.card`) used for Services, Team Members, and Featured 
  Content, each with border, border-radius, padding, margin, and box-shadow
- Buttons styled with background color, padding, border-radius, hover 
  effect, and cursor pointer
- Navigation bar improvements: spacing between menu items, hover effects, 
  and active-page highlighting (`.active`)
- Clean footer containing copyright, contact information, and social 
  media links
- **Bonus Challenge:** "Back to Top" button using a plain HTML anchor link 
  (`href="#top"`) and CSS — no JavaScript

### Sections Included

1. Header (sticky, with navigation bar, active-page highlighting)
2. Home: Hero Section, Company Introduction, Featured Services (cards)
3. About: Company Overview, Mission, Vision, Team Members (cards)
4. Services: 3+ Services (cards)
5. Contact: Contact Information, Office Address, Email, Phone, Contact Form
6. Back to Top button (bonus)
7. Footer

---

## CSS Day 3 — Flexbox Layout

### Objective

Enhance the Multi-Page Company Website by implementing CSS Flexbox 
throughout, learning to build flexible, responsive layouts using modern 
CSS layout techniques.

### CSS Concepts Used

- `display: flex`, `flex-direction`, `justify-content`, `align-items`, 
  `gap`, and `flex-wrap` applied across the header, hero, cards, and footer
- `flex-grow` / `flex-shrink` used via the shorthand `flex: 1 1 240px` on cards
- **Navigation:** converted to a Flexbox row — logo on the left, nav links 
  on the right, spaced evenly
- **Hero Section:** text and image laid out side-by-side using Flexbox, 
  vertically centered
- **Services Section:** flexible card row with title, description, and a 
  button per card, wrapping responsively (4 service cards)
- **Team Section:** flexible card row with profile image, name, 
  designation, and short description per member
- **Footer:** reorganized into a 4-column Flexbox layout — Company Info, 
  Quick Links, Contact Details, and Follow Us
- **Bonus Challenge:** Responsive navigation bar — a media query collapses 
  the header and nav into a stacked layout on small screens

### Sections Included

1. Header (Flexbox row: logo left, nav right)
2. Home: Hero (Flexbox), Company Introduction, Featured Services (Flexbox cards)
3. About: Company Overview, Mission, Vision, Team Members (Flexbox cards 
   with images and descriptions)
4. Services: 4 Services (Flexbox cards with buttons)
5. Contact: Contact Information, Contact Form
6. Footer (4-column Flexbox layout)

---

## Final CSS Assignment — Complete Responsive Company Website

### Objective

Transform the multi-page company website into a modern, responsive, and 
visually polished site using all CSS concepts learned throughout the 
internship — typography, color systems, Flexbox, Grid, animations, and 
responsive design — combined into a single, production-quality project.

### CSS Concepts Used

**Typography & Color Theme**
- Google Fonts (`Open Sans` for body, `Poppins` for headings) with a clear 
  font hierarchy and consistent line height
- Full color system defined with **CSS Variables** (`:root`), including a 
  dedicated `--color-surface` variable for elements that need to invert in 
  dark mode, separate from `--color-white` (which stays constant for text)

**Navigation Bar**
- Fully responsive Flexbox navigation with logo left / links right
- Hover effects with an animated underline (`::after` pseudo-element)
- Active page indicator (`.active`)
- Sticky navigation (`position: sticky`)

**Hero Section**
- Diagonal gradient background (`linear-gradient`) using the site's 
  existing brand colors — no separate hero image needed
- Heading, description, and a Call-to-Action button (`.hero-cta`) linking 
  to the Services page

**Cards**
- Card layouts for **Services**, **Team Members**, and **Testimonials** 
  (new section), each with border-radius, box-shadow, hover lift 
  animation, and a smooth `transition`
- Testimonials section specifically laid out using **CSS Grid** 
  (`repeat(auto-fit, minmax(250px, 1fr))`), while Services/Team continue 
  to use Flexbox — demonstrating appropriate use of each layout tool

**Buttons**
- Consistent button styling (`.btn`, `.hero-cta`, `.back-to-top`, 
  `input[type="submit"]`) with hover effects, transitions, rounded 
  corners, and colors drawn from the shared variable palette

**Layout**
- Flexbox (navigation, hero, cards, footer) and CSS Grid (testimonials) 
  used together
- Centered `.container` with consistent max-width and padding across 
  every page

**Responsive Design**
- Three media query breakpoints: **992px** (laptop), **768px** (tablet), 
  and **576px** (mobile) — adjusting hero text size, card wrapping, 
  navigation layout, and footer column stacking at each stage

**Animations & Effects** (5 implemented)
1. Card hover lift + shadow transition
2. Hero CTA button hover transition
3. Navigation underline animation on hover
4. Fade-in animation on section load (`@keyframes fadeIn`)
5. Smooth scrolling (`scroll-behavior: smooth`)

**Footer**
- Four-column layout: Company Information, Quick Links, Contact Details, 
  and Social Media Icons (via Font Awesome), plus copyright

### Bonus Challenges Completed (2 of 2)

1. **Scroll-to-Top functionality** — a "Back to Top" button combined with 
   `scroll-behavior: smooth`, HTML/CSS only, no JavaScript
2. **Dark Mode Toggle** — implemented entirely in pure CSS using the 
   checkbox-hack pattern (`body:has(#dark-toggle:checked)`) to override 
   the `:root` color variables site-wide, with **no JavaScript**

### Design Choices

The final assignment intentionally builds on the same brown/green brand 
identity established back in CSS Day 1, rather than introducing a new 
color scheme. All colors were formalized into CSS variables so the same 
two-color identity could be consistently reused — including being cleanly 
inverted for dark mode without duplicating any styles. Team member photos 
are currently placeholder (the same personal photo reused across all three 
profiles) pending consent from teammates before using their actual photos.

### Sections Included

1. Header (sticky, responsive, active-page indicator, dark mode toggle)
2. Home: Hero (gradient + CTA), Who We Are, Featured Services, Testimonials (Grid)
3. About: Company Overview, Mission, Vision, Team Members (with images)
4. Services: 4 Services (cards with buttons)
5. Contact: Contact Information, Contact Form
6. Footer (4-column layout with social icons)

---

## Folder Structure

```
TechTide-Internship-Task/
├── Task1/                  Day 1 - Personal Portfolio Homepage (HTML)
├── Day2Task/                Day 2 - Student Portfolio Website (HTML)
├── Day3Task/                Day 3 - Student Registration Form (HTML)
├── Day4Task/                Day 4 - Multi-Page Company Website (HTML)
├── CSS_Day1Task/             CSS Day 1 - Styled Company Website
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   └── css/
│       └── styles.css
├── CSS_Day2Task/             CSS Day 2 - Box Model & Layout
│   └── (same structure as above)
├── CSS_Day3Task/             CSS Day 3 - Flexbox Layout
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   ├── img/
│   └── css/
│       └── styles.css
├── CSS_Day4Task/             Final CSS Assignment - Complete Responsive Site
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   ├── img/
│   ├── output/               Screenshots (light & dark mode, all pages)
│   └── css/
│       └── styles.css
└── README.md
```

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
cd CSS_Day3Task      (for CSS Day 3)
cd CSS_Day4Task      (for the Final CSS Assignment)
```
3. Open `index.html` in any web browser (double-click the file, or 
   right-click and choose "Open with" your preferred browser). Use the 
   navigation bar to move between Home, About, Services, and Contact. 
   Click "Back to Top" to scroll smoothly to the header. On the Final CSS 
   Assignment (`CSS_Day4Task`), click the 🌙 icon in the navigation bar to 
   toggle Dark Mode.

No build steps, servers, or dependencies are required — these are static 
HTML/CSS-only pages. An internet connection is needed on first load for 
Google Fonts and Font Awesome icons (loaded via CDN).

## Screenshots

Light mode and dark mode screenshots of every page (Home, About, Services, 
Contact) for the Final CSS Assignment are included in 
`CSS_Day4Task/output/`.

## GitHub Repository

[https://github.com/ABman-FireBird/TechTide-Internship-Task](https://github.com/ABman-FireBird/TechTide-Internship-Task)

## Author

**Abdullah Farooq**  
[LinkedIn](https://www.linkedin.com/in/abdullah-farooq-738619302/) | 
[GitHub](https://github.com/ABman-FireBird)
