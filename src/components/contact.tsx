import React from "react";
import { MdAlternateEmail, MdCall } from "react-icons/md";

const email = "dev.bosepiush@gmail.com";
const phone = "+918910530975";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-black text-4xl md:text-7xl">Contact me</h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-8 lg:gap-12 wrapper">
        <div className="left flex flex-col gap-3 w-full md:w-2/5">
          <a
            className="flex items-center gap-2 hover:bg-[#00341d] px-2 py-1 rounded-lg max-w-fit hover:text-[#dddad1] text-lg transition-colors duration-300"
            href={`mailto:${email}`}
          >
            <MdAlternateEmail />
            {email}
          </a>
          <a
            className="flex items-center gap-2 hover:bg-[#00341d] px-2 py-1 rounded-lg max-w-fit hover:text-[#dddad1] text-lg transition-colors duration-300"
            href={`tel:${phone}`}
          >
            <MdCall />
            {phone}
          </a>
        </div>

        <div className="flex-none my-2 md:my-0 w-full md:w-auto text-center middle">
          Or
        </div>

        <div className="right w-full md:w-2/5">
          <form action="#" className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                required
              />
              <textarea
                placeholder="Your Message"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                rows={4}
                required
              >
              </textarea>
              <button
                type="submit"
                className="bg-dark hover:bg-[#6a1dbf] px-4 py-2 transition-colors duration-300 fg-light"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
