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
    company: "Bltzo",
    location: "Cairo, Egypt",
    position: "Frontend Engineer",
    period: "11/2024 - Present",
    achievements: [
      "Leveraging modern tools and frameworks to deliver scalable and efficient web applications.",
    ],
  },
  {
    company: "MK Group",
    location: "Cairo, Egypt",
    position: "Full Stack Engineer (React, ASP.Net)",
    period: "12/2023 - 11/2024",
    achievements: [
      "Migrated from create-react-app to Vite which significantly improved the developer experience and boosted the development team productivity.",
      "Migrated from Prettier to BiomeJS, a Rust-based toolchain for web development. BiomeJS, claiming speeds 35 times faster than Prettier, boosted productivity and efficiency.",
      "Revamped Miracle ERP web app's Sass files, cutting over 1800 lines in the main file with CSS logical properties, ensuring seamless support for Arabic and English languages.",
    ],
  },
  {
    company: "ALX Foundation",
    location: "Cairo, Hybrid",
    position: "Software Engineering Intern",
    period: "4/2023 - Present",
    achievements: [
      "Enrolled in an intensive program; focused on software engineering fundamentals and project work.",
      "Learning and applying technologies including Git & Bash, C & Python, HTML, CSS, JavaScript, React.js, TypeScript & Sass.",
      "Contributed to hands-on projects such as simple_shell (CLI shell in C).",
    ],
  },
  {
    company: "Mind Builders Academy",
    location: "Cairo, Remote",
    position: "Programming Instructor",
    period: "5/2023 - 10/2023",
    achievements: [
      "Teaching programming fundamentals using Scratch and Python.",
    ],
  },
  {
    company: "Albonyan Almarsos",
    location: "Cairo, Remote",
    position: "Full Stack Engineer Intern",
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
