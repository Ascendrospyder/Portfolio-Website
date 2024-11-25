import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I am Arindam 👋
            <br className="hidden lg:inline-block" />a student developer at{" "}
            <a
              href="https://www.homeaffairs.gov.au"
              target="_blank"
              class="hover-link"
            >
              Home Affairs
            </a>{" "}
            👨‍💻
          </h1>
          <p className="pt-2 mb-8 leading-relaxed w-[40rem]">
            I am a final year Computer Science student at UNSW who also works at
            the Department of Home Affairs as a digital cadet as a fullstack
            developer for the Cargo and Trade Systems branch. I am passionate
            about software development and I am always looking for opportunities
            to learn and grow.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white gradient-background border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Connect with me!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
