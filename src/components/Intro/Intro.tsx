import React from "react";
import "./Intro.css";
import profileImg from "../../assets/profile_pic.jpeg"; // replace with your image

import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const Intro: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#FAF1E3]"
    >
      <div className="w-full px-[10%] grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-widest text-[#6b5b5b]">
            Hello, I’m
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3b2f2f]">
            Shreya Rajanala
          </h1>

          <h2 className="text-xl md:text-2xl text-[#5a4747]">
            Frontend Developer
          </h2>

          <p className="text-[#6b5b5b] max-w-md">
            I build clean, responsive and user-friendly interfaces.  
            Always excited to collaborate and turn ideas into reality.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 pt-3">
            <a
  href="/Shreya_Rajanala_Resume.pdf"
  download="Shreya_Rajanala_CV"
  className="px-6 py-2 rounded-full bg-[#7D5A23] hover:opacity-90 transition"
>
  <span className="text-[#FAF1E3] font-bold">Download CV</span>
</a>



          </div>

          {/* SKILLS */}
          <div className="flex items-center gap-5 pt-6 text-3xl text-[#3b2f2f]">
            <FaReact title="React" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="profile-border">
            <img
              src={profileImg}
              alt="Shreya"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
