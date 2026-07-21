# Abdullah's Software House — TechTide Internship Portfolio

**Student Name:** Abdullah Farooq

## Project Description

This repository contains all tasks completed during the TechTide Summer
Internship 2026, tracking the progression from static HTML pages to a fully
responsive, animated, multi-page company website styled entirely with modern
CSS — including CSS variables, Flexbox, Grid, media queries, and a pure-CSS
dark mode toggle. The final tasks convert the entire website to **Tailwind CSS**,
a utility-first CSS framework, starting with the company website and then
building an AI-focused landing page.

## Objective

The objective of this project is to practice writing clean, semantic HTML,
then progressively apply CSS fundamentals, layout techniques, and modern
responsive design practices to build a professional, polished company
website — "Abdullah's Software House" — from the ground up. The final
objectives are to master Tailwind CSS by replacing all custom CSS with
Tailwind utility classes and building a new AI-focused landing page.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)
- CSS Variables, Flexbox, and CSS Grid (Final Assignment)
- **Tailwind CSS** (Week 3, Days 1 & 2 — via CDN)
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

---

## Week 3, Day 1 — Tailwind CSS Conversion (Company Website)

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
- ✅ **Dark Mode Toggle** (with localStorage persistence)
- ✅ **Smooth Scroll** to top functionality
- ✅ **Hover Effects** on all interactive elements (cards, buttons, links)
- ✅ **Responsive Design** (mobile, tablet, desktop)

### Tailwind Utilities Used (Day 1)

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

### Pages Created (Day 1)

1. **index.html** — Homepage (Hero, About, Services, Testimonials)
2. **about.html** — About Page (Overview, Mission, Vision, Team)
3. **services.html** — Services Page (4 service cards)
4. **contact.html** — Contact Page (Info + Form)

---

## Week 3, Day 2 — Tailwind CSS (AI Landing Page)

### Objective

Build a modern, fully responsive AI solutions landing page using **Tailwind CSS**
from scratch. This page promotes "Abdullah AI" — an intelligent automation
company — and includes all standard landing page components.

### Features Implemented

- ✅ **Navigation Bar** with logo, navigation links, and CTA button
- ✅ **Hero Section** with heading, description, CTA button, and hero image
- ✅ **Features Section** with 6 feature cards (AI Chatbots, Workflow Automation, Predictive Analytics, Cloud Integration, Advanced Security, 24/7 AI Support)
- ✅ **About Section** with company description and image
- ✅ **Testimonials Section** with 3 client testimonials (with profile images)
- ✅ **Pricing Section** with 3 pricing plans (Starter, Professional, Enterprise)
- ✅ **Contact Section** with contact form
- ✅ **Footer** with Company Info, Quick Links, Contact Details, and Social Icons
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Hover Effects** on cards, buttons, and links
- ✅ **Gradient Background** on hero section

### Tailwind Utilities Used (Day 2)

| Category | Tailwind Classes Used | Purpose |
|----------|----------------------|---------|
| **Spacing** | `p-*`, `px-*`, `py-*`, `m-*`, `mb-*`, `gap-*`, `space-y-*` | Padding and Margin |
| **Colors** | `bg-slate-900`, `text-white`, `text-cyan-400`, `text-slate-600` | Background and text colors |
| **Typography** | `text-4xl`, `font-bold`, `text-center`, `leading-tight` | Font size, weight, alignment |
| **Flexbox** | `flex`, `flex-col`, `md:flex-row`, `justify-between` | Flex layouts |
| **Grid** | `grid`, `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3` | CSS Grid layouts |
| **Width/Height** | `w-full`, `max-w-7xl`, `max-w-4xl`, `h-[450px]` | Sizing utilities |
| **Border Radius** | `rounded-xl`, `rounded-lg`, `rounded-full` | Border radius |
| **Shadows** | `shadow-lg`, `shadow-xl`, `shadow-2xl` | Box shadows |
| **Hover Effects** | `hover:bg-cyan-400`, `hover:shadow-xl`, `hover:-translate-y-2` | Hover states |
| **Responsive** | `sm:`, `md:`, `lg:` | Breakpoint prefixes |
| **Gradients** | `bg-gradient-to-br`, `from-slate-900`, `via-slate-800`, `to-indigo-900` | Background gradients |

### Page Created (Day 2)

1. **index.html** — Complete AI Landing Page (single page with all sections)

### Sections Included (Day 2)

1. Header (Navigation with logo, links, CTA)
2. Hero Section (Heading, description, button, image)
3. Features Section (6 feature cards with icons)
4. About Section (Image + description)
5. Testimonials Section (3 client testimonials)
6. Pricing Section (3 pricing plans)
7. Contact Section (Contact form)
8. Footer (Company info, links, contact, social icons)

---

## Folder Structure
TechTide-Internship-Task/
├── Task1/ # Day 1 - Personal Portfolio Homepage (HTML)
├── Day2Task/ # Day 2 - Student Portfolio Website (HTML)
├── Day3Task/ # Day 3 - Student Registration Form (HTML)
├── Day4Task/ # Day 4 - Multi-Page Company Website (HTML)
├── CSS_Day1Task/ # CSS Day 1 - Styled Company Website
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── contact.html
│ └── css/
│ └── styles.css
├── CSS_Day2Task/ # CSS Day 2 - Box Model & Layout
│ └── (same structure as above)
├── CSS_Day3Task/ # CSS Day 3 - Flexbox Layout
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── contact.html
│ ├── img/
│ └── css/
│ └── styles.css
├── CSS_Day4Task/ # Final CSS Assignment - Complete Responsive Site
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── contact.html
│ ├── img/
│ ├── output/ # Screenshots (light & dark mode, all pages)
│ └── css/
│ └── styles.css
├── TailwindDay1Task/ # Week 3, Day 1 - Tailwind CSS (Company Website)
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── contact.html
│ ├── img/
├── TailwindDay2Task/ # Week 3, Day 2 - Tailwind CSS (AI Landing Page)
│ ├── index.html
│ └── img/
└── README.md # This file