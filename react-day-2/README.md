# React Day 2 — Props & Reusable Components

**Student Name:** Abdullah Farooq

## Project Description

A responsive Tech Company landing page built with React and Tailwind CSS,
demonstrating props, reusable components, and dynamic rendering with
`.map()`. The page includes a sticky navbar, hero section, features grid,
product catalog, team section, and footer — all built from a small set of
reusable components fed with different data through props rather than
duplicated markup.

## Technologies Used

- React (functional components)
- Vite
- Tailwind CSS
- JavaScript (ES6)

## React Concepts Learned

- **Props** — passing data from parent to child components (`name`, `role`,
  `image`, etc.)
- **Destructuring props** — accessing prop values directly in the function
  signature (e.g. `{ name, position, image }`)
- **Reusable components** — building one component (`ProductCard`,
  `TeamCard`, `Button`) and rendering it multiple times with different data,
  instead of creating a separate component per item
- **Dynamic rendering with `.map()`** — looping over arrays of objects
  (`products`, `teamMembers`, feature `cards`) to generate JSX elements,
  with a unique `key` prop on each item
- **Component composition** — assembling a full page (`App.jsx`) out of
  smaller, focused components (`Navbar`, `Hero`, `FeatureCard`,
  `ProductCard`, `TeamCard`, `Footer`)
- **Conditional/derived styling via props** — using `variant` and `size`
  props to control a reusable `Button` component's Tailwind classes

## Component Structure

```
src/
├── components/
│   ├── Navbar.jsx       — Logo, nav links, CTA button
│   ├── Hero.jsx         — Heading, description, CTA button, image
│   ├── Button.jsx       — Reusable button (text, variant, size props)
│   ├── FeatureCard.jsx  — Reusable feature card (title, description, image)
│   ├── ProductCard.jsx  — Reusable product card (image, name, category,
│   │                       price, rating, availability, button)
│   ├── TeamCard.jsx     — Reusable team member card (name, position,
│   │                       department, image, social link)
│   └── Footer.jsx       — Company info, site links, social links
├── App.jsx              — Assembles all sections, holds data arrays
├── main.jsx
└── index.css
```

## How to Run the Project

1. Clone the repository and navigate to this folder:
   ```bash
   cd react-day-2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## How Props Were Used

Each reusable component accepts its data entirely through props rather than
hardcoding content. For one-off instances (like three `ProfileCard`s during
practice), props were passed directly as JSX attributes. For repeated
content sections (Features, Products, Team), data was stored in arrays of
objects and looped over with `.map()`, passing each object's fields as
props to the component on every iteration — meaning six different products
render from a single `ProductCard` component, not six separate ones.

## Author

**Abdullah Farooq**
TechTide Summer Intern 2026
