# Abdullah's Software House — TechTide Internship Portfolio

**Student Name:** Abdullah Farooq

## Project Description

This repository contains all tasks completed during the TechTide Summer
Internship 2026, tracking the progression from static HTML pages to a fully
responsive, animated, multi-page company website styled entirely with modern
CSS — including CSS variables, Flexbox, Grid, media queries, and a pure-CSS
dark mode toggle. The final task converts the entire website to **Tailwind CSS**,
a utility-first CSS framework.

## Objective

The objective of this project is to practice writing clean, semantic HTML,
then progressively apply CSS fundamentals, layout techniques, and modern
responsive design practices to build a professional, polished company
website — "Abdullah's Software House" — from the ground up. The final
objective is to master Tailwind CSS by replacing all custom CSS with
Tailwind utility classes.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)
- CSS Variables, Flexbox, and CSS Grid (Final Assignment)
- **Tailwind CSS** (Week 3, Day 1 — via CDN)
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
- CSS Variables (`:root`) for reusable colors
- Flexbox for header, footer, and card layouts
- CSS Grid for testimonials section
- Media Queries for responsive design (mobile, tablet, desktop)
- Hover effects on navigation links, buttons, and cards
- Pure CSS Dark Mode toggle (no JavaScript)
- Smooth scroll behavior
- Fade-in animation on page load

---

## Week 3, Day 1 — Tailwind CSS Conversion

### Objective

Rebuild the existing Multi-Page Company Website using **Tailwind CSS** instead 
of custom CSS. Replace all custom styling with Tailwind utility classes while 
maintaining the same look, feel, and functionality.

### Features Implemented

- ✅ **Responsive Navigation Bar** with company logo and navigation links
- ✅ **Hero Section** with heading, description, and Call-to-Action button
- ✅ **Services Section** with 4+ service cards (each with icon, title, description, button)
- ✅ **About Page** with Company Overview, Mission, Vision, and Team Members
- ✅ **Contact Page** with Contact Information and Contact Form
- ✅ **Footer** with Company Information, Quick Links, Contact Details, and Social Icons
- ✅ **Testimonials Section** with client reviews
- ✅ **Dark Mode Toggle** (pure CSS with localStorage persistence)
- ✅ **Smooth Scroll** to top functionality
- ✅ **Hover Effects** on all interactive elements (cards, buttons, links)
- ✅ **Responsive Design** (mobile, tablet, desktop)

### Tailwind CSS Concepts Used

| Concept | Description |
|---------|-------------|
| **Utility-First CSS** | All styling done using Tailwind utility classes |
| **Responsive Breakpoints** | `sm:`, `md:`, `lg:` for mobile-first responsive design |
| **Flexbox & Grid** | `flex`, `grid` for modern layouts |
| **Typography Utilities** | `text-*`, `font-*`, `leading-*` for text styling |
| **Spacing Utilities** | `p-*`, `m-*`, `gap-*` for padding and margin |
| **Colors** | Custom color palette configured in `tailwind.config` |
| **Hover States** | `hover:` prefix for interactive elements |
| **Shadows & Borders** | `shadow-*`, `rounded-*` for visual styling |
| **Width & Height** | `w-*`, `h-*`, `max-w-*` for sizing |

### Tailwind Utilities Used

| Category | Tailwind Classes Used | Purpose |
|----------|----------------------|---------|
| **Spacing** | `p-*`, `px-*`, `py-*`, `m-*`, `mb-*`, `gap-*` | Padding and Margin |
| **Colors** | `bg-brand-primary`, `text-white`, `text-gray-700` | Background and text colors |
| **Typography** | `text-3xl`, `font-bold`, `text-center`, `leading-8` | Font size, weight, alignment |
| **Flexbox** | `flex`, `flex-col`, `flex-wrap`, `justify-between` | Flex layouts |
| **Grid** | `grid`, `grid-cols-1`, `md:grid-cols-2` | CSS Grid layouts |
| **Width/Height** | `w-full`, `max-w-6xl`, `w-32`, `h-32` | Sizing utilities |
| **Border Radius** | `rounded-xl`, `rounded-lg`, `rounded-full` | Border radius |
| **Shadows** | `shadow-lg`, `shadow-md`, `hover:shadow-xl` | Box shadows |
| **Hover Effects** | `hover:bg-brand-dark`, `hover:text-white` | Hover states |
| **Responsive** | `sm:`, `md:`, `lg:` | Breakpoint prefixes |

### Pages Created

1. **index.html** — Homepage (Hero, About, Services, Testimonials)
2. **about.html** — About Page (Overview, Mission, Vision, Team)
3. **services.html** — Services Page (4 service cards)
4. **contact.html** — Contact Page (Info + Form)

---

## How to Run the Project

### Option 1: Direct Open in Browser
1. Clone the repository
2. Navigate to the `TailwindDay1Task/` folder
3. Open any HTML file (e.g., `index.html`) in your browser
4. No build tools required — Tailwind is loaded via CDN

### Option 2: Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: GitHub Pages
1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select the main branch and root folder
4. Your site will be available at `https://[username].github.io/[repo-name]/`

---

## File Structure
TailwindDay1Task/
├── index.html # Homepage
├── about.html # About Page
├── services.html # Services Page
├── contact.html # Contact Page
└── img/
└── img2.JPG # Team member images


---

## Features Implemented Across All Tasks

### Day 1 — HTML Portfolio
- ✅ Semantic HTML structure
- ✅ Navigation with internal links
- ✅ Hero section with introduction
- ✅ About Me with profile image
- ✅ Skills as unordered list
- ✅ Education as ordered list with GPA
- ✅ Contact with `mailto:` and `tel:` links
- ✅ Footer with copyright

### Day 2 — Enhanced Portfolio
- ✅ Course table with proper structure
- ✅ Nested lists for hobbies
- ✅ Horizontal rules between sections
- ✅ Line breaks in About Me
- ✅ Social Media section

### Day 3 — Registration Form
- ✅ Four fieldset sections
- ✅ All input types (text, email, tel, date, number, password, file, radio, checkbox)
- ✅ Select dropdown for City and Country
- ✅ Textarea for Bio
- ✅ Submit and Reset buttons
- ✅ Thank You page

### Day 4 — Multi-Page Website
- ✅ 4 linked pages
- ✅ Consistent header and footer
- ✅ Hero section with CTA
- ✅ Services with 4+ cards
- ✅ About with team members
- ✅ Contact with form
- ✅ Semantic HTML throughout

### CSS Day 1 — Styled Website
- ✅ External CSS
- ✅ Google Fonts
- ✅ CSS Variables
- ✅ Flexbox layouts
- ✅ CSS Grid
- ✅ Media Queries
- ✅ Hover effects
- ✅ Dark Mode (pure CSS)
- ✅ Animations

### Week 3, Day 1 — Tailwind CSS
- ✅ Tailwind CDN setup
- ✅ Custom color configuration
- ✅ All Tailwind utilities used
- ✅ Responsive design
- ✅ Hover effects
- ✅ Dark Mode (with localStorage)
- ✅ No custom CSS

---

## Evaluation Criteria

| Criteria | Max Marks |
|----------|-----------|
| Proper Use of Tailwind Utilities | 6 |
| Responsive Layout | 4 |
| UI Design & Consistency | 4 |
| Code Organization | 3 |
| GitHub Repository & README | 2 |
| PDF Documentation | 1 |
| **Total** | **20** |

---

## Learning Outcomes

By completing this project, I have learned:

- ✅ How to write semantic, accessible HTML
- ✅ How to structure a multi-page website
- ✅ How to style websites with CSS (variables, Flexbox, Grid)
- ✅ How to make websites responsive with media queries
- ✅ How to use Tailwind CSS utility classes
- ✅ How to configure Tailwind with custom colors
- ✅ How to build dark mode without JavaScript
- ✅ How to create hover effects and animations
- ✅ How to organize code for maintainability
- ✅ How to use Git and GitHub for version control
- ✅ How to write professional documentation (README, PDF reports)

---

## Author

**Abdullah Farooq**  
TechTide Summer Intern 2026  
[LinkedIn](https://www.linkedin.com/in/abdullahfarooq/)  
[GitHub](https://github.com/abdullahfarooq)

---

## License

This project is created for educational purposes as part of the TechTide Summer Internship 2026.