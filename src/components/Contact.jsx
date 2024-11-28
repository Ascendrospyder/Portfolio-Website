import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uvfqa0w",
        "template_9pqmxji",
        form.current,
        "YUNbuuw9AFwT-S0I4"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Message failed to send. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="text-gray-400 bg-gray-900 body-font relative"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="location"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26514.75550887235!2d151.19388496883545!3d-33.86881965252273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1f853b016c3%3A0xd9f4f8e1545d33fa!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1682534828332!5m2!1sen!2sau"
            style={{ border: "0" }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            I'd love to hear from you! Feel free to get in touch using the form
            below or via email. If you want to request a resume, please let me
            know below!
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-[#e02ef0] focus:bg-gray-900 focus:border-[#e02ef0] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-[#e02ef0] focus:bg-gray-900 focus:border-[#e02ef0] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-[#e02ef0] focus:bg-gray-900 focus:border-[#e02ef0] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-[#e02ef0] border-0 py-2 px-6 focus:outline-none hover:bg-[#c81ad7] rounded text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
