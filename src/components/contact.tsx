import React from "react";
import { MdAlternateEmail, MdCall } from "react-icons/md";
import { motion } from "framer-motion";

const email = "dev.bosepiush@gmail.com";
const phone = "+918910530975";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <motion.h1
        className="font-black text-4xl md:text-7xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-8 lg:gap-12 wrapper">
        <motion.div
          className="left flex flex-col gap-3 w-full md:w-2/5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            bounce: 0.4,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <motion.a
            className="flex items-center gap-2 hover:bg-[#00341d] px-2 py-1 rounded-lg max-w-fit hover:text-[#dddad1] text-lg transition-colors duration-300"
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <MdAlternateEmail />
            {email}
          </motion.a>
          <motion.a
            className="flex items-center gap-2 hover:bg-[#00341d] px-2 py-1 rounded-lg max-w-fit hover:text-[#dddad1] text-lg transition-colors duration-300"
            href={`tel:${phone}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <MdCall />
            {phone}
          </motion.a>
        </motion.div>

        <motion.div
          className="flex-none my-2 md:my-0 w-full md:w-auto text-center middle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Or
        </motion.div>

        <motion.div
          className="right w-full md:w-2/5"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            bounce: 0.4,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <form action="#" className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                required
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                required
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.textarea
                placeholder="Your Message"
                className="bg-light/50 p-2 border border-dark focus:outline-none focus:ring-[#00341d] focus:ring-2 transition-colors duration-300"
                rows={4}
                required
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.7 }}
                viewport={{ once: true }}
              >
              </motion.textarea>
              <motion.button
                type="submit"
                className="bg-dark hover:bg-[#6a1dbf] px-4 py-2 transition-colors duration-300 fg-light"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
