import buildrGif from "./resources/Buildr.gif"
import studySphere from './resources/studySphere.png'
import treats from "./resources/treats.jpg"
import nextJs from "./resources/nextjs-svgrepo-com (2).svg"
import react from "./resources/logo-react-svgrepo-com.svg"
import typescript from "./resources/typescript-16-svgrepo-com.svg"
import postgres from "./resources/postgresql-svgrepo-com.svg"
import prisma from "./resources/light-prisma-svgrepo-com.svg"
import tailwind from "./resources/tailwind-svgrepo-com.svg"
import expo from "./resources/expo-svgrepo-com.svg"
import node from "./resources/nodejs-svgrepo-com.svg"
import express from "./resources/express-svgrepo-com (2).svg"
import mongodb from "./resources/mongodb-svgrepo-com.svg"

export const projects = [
  {
    title: "Buildr",
    description: "The following project is a FullStack form builder application made using Next.JS, ReactJS, Typescript , Dnd-Kit, PostgreSQL, Prisma and Tailwind CSS.",
    image: buildrGif,
    link: "https://github.com/Ascendrospyder/Buildr",
    stack: [
      { name: "Next.JS", icon: nextJs },
      { name: "ReactJS", icon: react },
      { name: "Typescript", icon: typescript },
      { name: "PostgreSQL", icon: postgres },
      { name: "Prisma", icon: prisma },
      { name: "Tailwind CSS", icon: tailwind },
    ]
  },
  {
    title: "Study Sphere",
    description: "Study Sphere is a mobile application designed to facilitate collaborative studying among peers. Built using React Native and Expo, it offers a platform for students to connect, organize study groups, and utilize various tools for efficient learning.",
    image: studySphere,
    link: "https://github.com/Ascendrospyder/Study-Sphere",
    stack: [
      { name: "React Native", icon: react },
      { name: "Expo", icon: expo },
    ]
  },
  {
    title: "Treats",
    description: "A collaboration with a team of 4 to build the backend of a ”Microsoft Teams” clone using TypeScript and NodeJS",
    image: treats,
    link: "https://github.com/Ascendrospyder/Teams-Clone-Backend",
    stack: [
      { name: "Typescript", icon: typescript },
      { name: "NodeJS", icon: node },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongodb },
    ]
  }
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
    role: "Digital Cadet - Fullstack Developer",
    company: "Department of Home Affairs",
    duration: "Jan 2023 - Present",
    description:
      "Worked on critical cargo applications ensuring responsive design, multi-browser support, and system efficiency. Helped configure pipelines in Azure DevOps.",
  },
  {
    role: "Database Administrator Intern",
    company: "Home Affairs",
    duration: "Jul 2022 - Dec 2022",
    description:
      "Optimized database queries and managed database migrations for large-scale systems supporting national operations.",
  },
  {
    role: "Software Engineering Intern",
    company: "Treasury Department",
    duration: "Nov 2021 - Feb 2022",
    description:
      "Contributed to building internal tools for data analysis and reporting, improving team efficiency by 20%.",
  },
];