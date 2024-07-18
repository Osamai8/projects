import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);



  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs
        .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current, {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
        })
      console.log('SUCCESS!');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // emailjs
    //   .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current, {
    //     publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //       setLoading(false);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       setLoading(false);
    //     },
    //   );
  };

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            required
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");