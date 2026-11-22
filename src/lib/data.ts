export const personalInfo = {
  name: "Osama Elshimy",
  location: "Cairo, Egypt",
  email: "osama.elshimy.o.e@gmail.com",
  github: "https://github.com/osama-elshimy",
  linkedin: "https://www.linkedin.com/in/osama-elshimy-639ab6223",
  profilePicture: "/personal-pic.jpg",
  heroDescription:
    "I'm an enthusiastic front-end engineer with a passion for building web applications. I bring a strong foundation in HTML, CSS, Sass, JavaScript, TypeScript, React, Tailwind, Next, Tanstack Start, and Astro. I also have good knowledge of Node, Express, and MongoDB and a commitment to continuous learning. I thrive in collaborative environments, I am eager to contribute, and I am excited to tackle new challenges in web development.",
};

export const workExperience = [
  {
    company: "Vast Group",
    location: "Riyadh, Saudi Arabia · Remote",
    position: "Frontend Engineer",
    period: "2/2026 - Present",
    achievements: [],
  },
  {
    company: "Bltzo",
    location: "Cairo, Egypt · On-site",
    position: "Frontend Engineer",
    period: "11/2024 - 1/2026",
    achievements: [
      "Migrated the Kurist customer portal from the Next.js 13 Pages Router to TanStack Start, using Valibot, TanStack Query, and OpenAPI for end-to-end type safety.",
      "Converted 70% of a JavaScript codebase to TypeScript over one year.",
      "Cut CI/CD pipeline execution time by 50% by moving workflows to Blacksmith.",
      "Led workshops on Git, CSS, and bundlers, mentored junior developers, and built interactive interfaces with shadcn/ui and TanStack Form.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    position: "Software Engineer",
    period: "5/2024 - 12/2025",
    achievements: [],
  },
  {
    company: "Miracle ERP",
    location: "Giza, Egypt · On-site",
    position: "Full Stack Engineer",
    period: "12/2023 - 11/2024",
    achievements: [
      "Migrated the ERP application from Create React App to Vite and moved the team from Prettier to Biome.",
      "Reworked roughly 1,700 lines of CSS using logical properties to support both Arabic and English layouts.",
      "Advocated for TypeScript and TanStack Query, built responsive React interfaces, and integrated them with .NET services.",
    ],
  },
  {
    company: "ALX Africa",
    location: "Cairo, Egypt · Hybrid",
    position: "Software Engineer Intern",
    period: "5/2023 - 11/2024",
    achievements: [
      "Studied software engineering fundamentals and applied Git, Bash, C, Python, and frontend technologies in hands-on projects.",
      "Built a command-line shell in C with a teammate.",
    ],
  },
  {
    company: "Mind Builders Academy",
    location: "Cairo, Egypt · Remote",
    position: "Software Programming Instructor",
    period: "5/2023 - 10/2023",
    achievements: [
      "Taught programming fundamentals to children using Scratch and Python.",
    ],
  },
  {
    company: "Albonyan Almarsos",
    location: "Cairo, Egypt · Remote",
    position: "Web Development Intern",
    period: "12/2022 - 7/2023",
    achievements: ["One of the top performers during the internship."],
  },
];

export const education = [
  {
    institution: "Cairo University",
    location: "Cairo, Egypt",
    degree: "Mechanical Engineering",
    period: "2017 - 2021",
  },
];

export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript", "Python", "C", "C++"],
  frontendDevelopment: [
    "React.js",
    "Tailwind",
    "HTML",
    "CSS",
    "Sass",
    "Shadcn UI",
    "Tanstack Start",
    "Astro",
    "Next.js",
  ],
  toolsAndServices: ["Git", "Bash", "VS Code"],
};

interface Project {
  title: string;
  description: string[];
  github: string;
}

export const projects: Project[] = [];

export const volunteering = [
  {
    role: "Frontend Engineer",
    organization: "Quran Tab Extension",
    location: "Remote",
    period: "11/2023 - Present",
  },
  {
    role: "Leader of a communication committee",
    organization: "Resala Charity",
    location: "Cairo, Egypt",
    period: "7/2019 - 11/2022",
  },
];
