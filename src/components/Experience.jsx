import React from "react";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 inline-block mb-4 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the roles I have undertaken in the past few years.
            I have worked in a variety of positions that have helped me develop
            my skills and knowledge in software development and engineering. I
            am always looking for opportunities to learn and grow.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex relative pb-12 w-full md:w-2/3 ${
                index === experiences.length - 1 ? "pb-0" : ""
              }`}
            >
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center animate-pulse">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e02ef0] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-8">
                <h2 className="font-medium title-font text-lg text-white mb-1">
                  {exp.role}
                </h2>
                <p className="leading-relaxed text-[#e02ef0]">{exp.company}</p>
                <p className="leading-relaxed text-gray-500">{exp.duration}</p>
                <p className="leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
