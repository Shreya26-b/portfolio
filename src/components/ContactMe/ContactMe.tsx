import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_vvtht9g",
      "template_m9embsk",
      formRef.current,
      "eB4pnRVdvgxpwx8YW"
    )
    .then(
      () => {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        formRef.current?.reset();
      },
      () => {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    );
};


  return (
    <section id="contactme" className="bg-[#FAF1E3] py-24 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left – Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            required
            className="w-full rounded-md border border-[#d6c6b8] bg-white px-4 py-3 text-[#2f1f1a] placeholder-[#8a6f63] outline-none focus:border-[#7a5c4b] focus:ring-1 focus:ring-[#7a5c4b]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-md border border-[#d6c6b8] bg-white px-4 py-3 text-[#2f1f1a] placeholder-[#8a6f63] outline-none focus:border-[#7a5c4b] focus:ring-1 focus:ring-[#7a5c4b]"
          />

          <textarea
            name="message"
            placeholder="Write your message"
            rows={5}
            required
            className="w-full rounded-md border border-[#d6c6b8] bg-white px-4 py-3 text-[#2f1f1a] placeholder-[#8a6f63] outline-none focus:border-[#7a5c4b] focus:ring-1 focus:ring-[#7a5c4b]"
          />

          <button
            type="submit"
            className="w-fit cursor-pointer rounded-md bg-[#7D5A23] px-6 py-3 text-sm font-bold text-[#faf1e3] transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {/* Right – Contact Info */}
        <div className="flex flex-col space-y-8 max-w-md">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b2a23]">
            Contact Me
          </h2>

          {/* One-liner */}
          <p className="text-[#3b2a23] leading-relaxed">
            Feel free to reach out using the form below. I’m always open to
            discussing opportunities or collaborations.
          </p>

          {/* Contact details with icons */}
          <div className="space-y-3 text-sm text-[#4f3a32]">
            <p className="flex items-center gap-2">
              <AiOutlineMail className="text-[#7a5c4b]" />
              shreyarajanala7123@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <AiOutlinePhone className="text-[#7a5c4b]" />
              +91 9346780507
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-[#7a5c4b]" />
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-[#7a5c4b]" />
              <a
                href="https://github.com/your-github"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="flex items-center gap-2">
              <CgProfile className="text-[#7a5c4b]" />
              <a
                href="https://www.naukri.com/"
                target="_blank"
                className="hover:underline"
              >
                Naukri Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
