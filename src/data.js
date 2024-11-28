import buildrGif from "./resources/Buildr.gif";
import studySphere from "./resources/studySphere.png";
import treats from "./resources/treats.jpg";
import nextJs from "./resources/nextjs-svgrepo-com (2).svg";
import react from "./resources/logo-react-svgrepo-com.svg";
import typescript from "./resources/typescript-16-svgrepo-com.svg";
import postgres from "./resources/postgresql-svgrepo-com.svg";
import prisma from "./resources/light-prisma-svgrepo-com.svg";
import tailwind from "./resources/tailwind-svgrepo-com.svg";
import expo from "./resources/expo-svgrepo-com.svg";
import node from "./resources/nodejs-svgrepo-com.svg";
import express from "./resources/express-svgrepo-com (2).svg";
import mongodb from "./resources/mongodb-svgrepo-com.svg";

export const projects = [
  {
    title: "Buildr",
    description:
      "The following project is a FullStack form builder application made using Next.JS, ReactJS, Typescript , Dnd-Kit, PostgreSQL, Prisma and Tailwind CSS.",
    image: buildrGif,
    link: "https://github.com/Ascendrospyder/Buildr",
    stack: [
      { name: "Next.JS", icon: nextJs },
      { name: "ReactJS", icon: react },
      { name: "Typescript", icon: typescript },
      { name: "PostgreSQL", icon: postgres },
      { name: "Prisma", icon: prisma },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Study Sphere",
    description:
      "Study Sphere is a mobile application designed to facilitate collaborative studying among peers. Built using React Native and Expo, it offers a platform for students to connect, organize study groups, and utilize various tools for efficient learning.",
    image: studySphere,
    link: "https://github.com/Ascendrospyder/Study-Sphere",
    stack: [
      { name: "React Native", icon: react },
      { name: "Expo", icon: expo },
    ],
  },
  {
    title: "Treats",
    description:
      "A collaboration with a team of 4 to build the backend of a ”Microsoft Teams” clone using TypeScript and NodeJS",
    image: treats,
    link: "https://github.com/Ascendrospyder/Teams-Clone-Backend",
    stack: [
      { name: "Typescript", icon: typescript },
      { name: "NodeJS", icon: node },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongodb },
    ],
  },
];

export const skills = [
  "TypeScript",
  "Python",
  "Java",
  "C",
  "Express.js",
  "React.js",
  "Angular",
  "SpringBoot",
  "Flask",
  "React Native",
  "Scikit-learn",
  "Git",
  "Linux",
  "Maven",
  "CI/CD",
  "Jira/Confluence",
  "Figma",
  "Docker",
  "Service Now",
  "SonarQube",
  "PostgreSQL",
  "MongoDB",
  "IBM DB2",
  "Oracle",
];

export const courseWork = [
  "COMP3121: Algorithms and Programming Techniques",
  "COMP1531: Software Engineering Fundamentals",
  "COMP9321: Data Services Engineering",
  "COMP2511: Object-Oriented Design & Programming",
  "COMP6080: Web Front-End Programming",
  "COMP4511: User Interface Design and Construction",
  "COMP1521: Computer Systems Fundamentals",
  "COMP2521: Data Structures and Algorithms",
  "COMP1511: Programming Fundamentals",
];

export const experiences = [
  {
    role: "Digital Cadet - Fullstack Developer at Cargo and Trade Systems",
    company: "Department of Home Affairs",
    duration: "May 2024 - Present",
    description: `
      In this role, I updated and maintained an automated message testing application for the Cargo and Trade systems. This involved working with Angular on the frontend and Spring Boot on the backend to create a system that allowed developers to generate tests efficiently. I also developed and optimised critical cargo applications using Struts and Spring Boot, focusing on responsive design, multi-browser compatibility, and high performance. Collaborating within an Agile environment, I was responsible for implementing new features, resolving issues, and creating comprehensive documentation for system changes. Additionally, I contributed to the configuration of pipelines for multiple repositories in Azure DevOps to streamline continuous integration and deployment processes.
    `,
  },
  {
    role: "Digital Cadet - Database Administrator Intern",
    company: "Department of Home Affairs",
    duration: "Mar 2024 - May 2024",
    description: `
      During this period, I worked as a database administrator, where I helped manage and configure IBM DB2 and Oracle servers. My focus was on ensuring data integrity, availability, and optimal performance across systems, providing reliable database support for large-scale operations through helping senior DBA's.
    `,
  },
  {
    role: "Data Science Mentee",
    company: "Department of Home Affairs",
    duration: "Jun 2024 - Dec 2024",
    description: `
      As part of a six-month mentorship program under a Data Engineer, I gained valuable expertise in data science and machine learning. I undertook hands-on projects from Kaggle datasets that involved data analysis, model building, and evaluation in Python. This experience significantly enhanced my technical proficiency in the field and deepened my understanding of practical applications of data-driven solutions.
    `,
  },
];
