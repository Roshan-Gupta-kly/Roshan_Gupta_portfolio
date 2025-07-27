import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { contact } from "../assets/images";
import { motion } from "framer-motion";
import { BiMessage, BiPhone, BiPhoneCall, BiSend } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const [errorMessage, setErrorMessage] = useState(""); // For error message

  // EmailJS sendEmail function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xh9xar7", // Replace with your Service ID
        "template_0lpy8vl", // Replace with your Template ID
        e.target,
        "kNjdWPXZKVSLRczTB" // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message successfully sent!"); // Set success message
          setErrorMessage(""); // Clear any error message
          e.target.reset(); // Reset form
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage(""); // Clear success message
          setErrorMessage("Failed to send the message. Please try again."); // Set error message
        }
      );
  };

  return (
    <section
      id="contact"
      className="border-t-[2px] border-slate-500 w-full mt-16"
    >
      <div className="mt-10 flex flex-col justify-center items-center gap-10 mb-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-3xl bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent">
            Contact
          </h2>
        </motion.div>
        <div className="w-full rounded-lg shadow-[0px_0px_10px_rgba(100,100,100,0.4)] bg-gray-950 px-8 py-12 ">
          <div className="p-8 rounded-lg flex items-center justify-between gap-10 md:flex-nowrap flex-wrap">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-4 w-full md:w-1/2"
            >
              <img src={contact} alt="contact" className="rounded-xl" />
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.2 }}
              >
                <a
                  href="mailto:lucysigma72@gmail.com"
                  className="text-slate-500 font-semibold flex items-center gap-2"
                >
                  <MdEmail className="text-2xl text-white" />
                  lucysigma72@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.4 }}
                className="flex items-center gap-2 justify-start"
              >
                <BiPhoneCall className="text-2xl text-white" />
                <p className="text-slate-500 font-semibold italic">
                  +9779703880674
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.6 }}
                className="flex items-center gap-6"
              >
                <a
                  href="https://www.linkedin.com/in/roshan-gupta-2817522a5/"
                  target="_blank"
                >
                  <BsLinkedin className="text-3xl text-white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100012549494337"
                  target="_blank"
                >
                  <FaFacebook className="text-3xl text-white" />
                </a>
                <a href="https://github.com/Roshan-Gupta-kly" target="_blank">
                  <BsGithub className="text-3xl text-white" />
                </a>
              </motion.div>
            </motion.div>

            <motion.form
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center gap-5 mt-4 md:w-1/2"
              onSubmit={sendEmail} // Call sendEmail on form submit
            >
              {/* Full Name */}
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <span>
                    <RxAvatar className="text-xl text-white" />
                  </span>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-slate-200 inline-block mb-1"
                  >
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="from_name"
                  placeholder="Full Name"
                  required
                  className="p-2 w-full block outline-none shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-md sm:text-sm bg-transparent text-white"
                />
              </div>

              {/* Email and Phone Number in series */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span>
                      <TfiEmail className="text-lg text-white" />
                    </span>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-200 inline-block mb-1"
                    >
                      Email
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="p-2 w-full block outline-none shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-md sm:text-sm bg-transparent text-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span>
                      <BiPhone className="text-lg text-white" />
                    </span>
                    <label
                      htmlFor="contact"
                      className="text-sm font-medium text-slate-200 inline-block mb-1"
                    >
                      Phone No.
                    </label>
                  </div>
                  <input
                    type="tel"
                    id="contact"
                    name="phone_no"
                    placeholder="+977 Nep"
                    className="p-2 w-full block outline-none shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-md sm:text-sm bg-transparent text-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <span>
                    <BiMessage className="text-lg text-white" />
                  </span>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-200 inline-block mb-1"
                  >
                    Message
                  </label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your message"
                  rows={8}
                  required
                  className="p-2 w-full block outline-none shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-md sm:text-sm bg-transparent text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="text-slate-300 max-w-32 py-2 rounded-md bg-transparent shadow-[0px_0px_10px_rgba(100,100,100,0.4)] hover:text-slate-300 flex items-center justify-center gap-2 group"
              >
                Send
                <span className="group-hover:translate-x-[2px] group-hover:scale-105 transition-transform ease-in-out delay-100 ">
                  <BiSend className="text-lg text-white" />
                </span>
              </button>

              {/* Success/Error Messages */}
              {successMessage && (
                <p className="text-transparent bg-clip-text bg-gradient-to-tr shadow-2xl  animate-pulse from-blue-400 to-red-800 font-semibold text-lg">
                  {successMessage}
                </p>
              )}
              {errorMessage && <p className="text-red-700">{errorMessage}</p>}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
