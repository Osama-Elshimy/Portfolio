# My Portfolio

A sleek, responsive portfolio website built with **Astro**, **React**, and **Tailwind CSS**, featuring modern animations and stunning glassmorphism effects.

![Portfolio Screenshot](https://github.com/Osama-Elshimy/Portfolio/blob/main/public/assets/portfolio.png)

## ✨ Features

- **Modern Design** – Clean, professional layout with elegant glassmorphism
- **Animations** – Smooth transitions and interactive UI via Framer Motion
- **Dark/Light Mode** – Automatic theme switching with system preference detection
- **Fully Responsive** – Optimized for mobile, tablet, and desktop
- **Blazing Fast** – Powered by Astro for superior performance
- **Modular Structure** – Built for easy customization and scalability
- **SEO Friendly** – Structured content and meta tags for better visibility

## 🚀 Demo

👉 [Live Demo](https://osama-elshimy.netlify.app/)

## 🛠 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm / yarn / bun / pnpm

### Installation

```bash
git clone https://github.com/Osama-Elshimy/Portfolio.git
cd Portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit `http://localhost:4321` in your browser to see it in action.

## 🧩 Customizing the Portfolio

All your content lives inside `src/lib/data.ts`. Update the following to make it yours:

### 1. Personal Info

```ts
export const personalInfo = {
  name: "Your Name",
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
};
```

### 2. Work Experience

```ts
export const workExperience = [
  {
    company: "Company Name",
    location: "Location",
    position: "Your Position",
    period: "Start Date - End Date",
    achievements: ["Achievement 1", "Achievement 2"],
  },
];
```

### 3. Education

```ts
export const education = [
  {
    institution: "University Name",
    location: "Location",
    degree: "Your Degree",
    period: "Start Date - End Date",
    achievements: ["Achievement 1", "Achievement 2"],
  },
];
```

### 4. Skills

```ts
export const skills = {
  programmingLanguages: ["TypeScript", "Python"],
  frontendDevelopment: ["React", "Next.js"],
  // and more...
};
```

### 5. Projects

```ts
export const projects = [
  {
    title: "Project Name",
    github: "https://github.com/yourusername/project",
    description: ["What it does", "Technologies used"],
  },
];
```

### 6. Volunteering Experience

```ts
export const volunteering = [
  {
    role: "Volunteering Role",
    organization: "Volunteering Organization",
    location: "Volunteering Location",
    period: "Start Date - End Date",
  },
];
```

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun preview
```

## 📤 Deployment

Easily deploy to platforms like **Vercel**, **Netlify**, **GitHub Pages**, or any static host of your choice.

---

## 🙏 Acknowledgments

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
