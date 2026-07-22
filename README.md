# Abdullah's Software House — TechTide Internship Portfolio

**Student Name:** Abdullah Farooq

## Project Description

This repository contains all tasks completed during the TechTide Summer
Internship 2026, tracking the progression from static HTML pages to a fully
responsive, animated, multi-page company website styled entirely with modern
CSS, and advancing into **Tailwind CSS** utility-first framework projects, 
culminating in an Admin Dashboard application.

## Objective

The objective of this project is to practice writing clean, semantic HTML,
then progressively apply CSS fundamentals, layout techniques, modern
responsive design practices, and finally master **Tailwind CSS** by building 
professional company websites, AI landing pages, and functional admin dashboards.

## Technologies Used

- HTML5 (Days 1–4)
- HTML5 + External CSS3 (CSS Day 1 onward)
- CSS Variables, Flexbox, and CSS Grid
- **Tailwind CSS** (Week 3, via CDN)
- [Font Awesome](https://fontawesome.com/) (via CDN, for footer social icons)
- Google Fonts (`Open Sans` and `Poppins`)

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

## How to Run the Project

### Option 1: Direct Open in Browser
1. Clone the repository:
   ```bash
   git clone [https://github.com/ABman-FireBird/TechTide-Internship-Task.git](https://github.com/ABman-FireBird/TechTide-Internship-Task.git)
   Navigate to the desired task folder (e.g., cd TailwindDay3Task)[cite: 1].

Open index.html directly in any web browser[cite: 1].

Option 2: Live Server (VS Code)
Install the "Live Server" extension in VS Code[cite: 1].

Right-click on index.html and select Open with Live Server[cite: 1].

Author
Abdullah Farooq

[cite: 1]

TechTide Summer Intern 2026[cite: 1]

LinkedIn

[cite: 1]

GitHub

[cite: 1]

License
This project is created for educational purposes as part of the TechTide Summer Internship 2026[cite: 1].